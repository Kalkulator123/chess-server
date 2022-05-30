import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game, { IGame } from "../models/game.model";
import { Stockfish } from "../services/Stockfish.service";

export const moveRouter = express.Router();

moveRouter.use(express.json());

moveRouter.post("/:move", async (req: Request, res: Response) => {
    if(req.body.currentGame === "" || typeof req.body === undefined) {
        const response = {
            status: "err"
        };

        res.status(404).send(response);
        return;
    }

    const id = req.body ? req.body.currentGame : "";
    const move = req.params ? req.params.move : "";

    const userId = req.body ? req.body.playerId : "";

    try {

        const queryOne = { _id: new ObjectId(id) };
        const gameOne = (await collections.games?.findOne(queryOne)) as unknown as Game;

        if(gameOne.blackPlayer === userId && gameOne.fen.split(' ')[1] !== "b"
        || gameOne.whitePlayer === userId && gameOne.fen.split(' ')[1] !== "w") {
            const response = {
                status: "not your turn"
            }

            res.send(response);
            return;
        }

        const stockfish = new Stockfish();

        let fen;
        if(gameOne.blackPlayer === "stockfish" || gameOne.whitePlayer === "stockfish") {
            fen = await (await stockfish.autoBot(gameOne.fen.split(' '), move)).join(" ");
        } else {
            fen = await (await stockfish.makeMove(gameOne.fen.split(' '), move)).join(" ");
        }
        
        let status = gameOne.status;
        const nextMove = await stockfish.checkNextMove(fen);

        const newGame: IGame = {
            fen: fen === "won" ? gameOne.fen : fen,
            status: nextMove.split('')[0] === '(' ? fen.split(' ')[1] === "b" ? "white won" : "black won" : status,
            whitePlayer: gameOne.whitePlayer,
            blackPlayer: gameOne.blackPlayer
        }

        const query = { _id: new ObjectId(id) };
        const result = await collections.games?.updateOne(query, { $set: newGame });

        result
            ? res.status(200).send(newGame)
            : res.status(304).send(`Game with id: ${id} not updated`);

        console.log("[express] Updated game with id " + id);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
moveRouter.post("/", async (req: Request, res: Response) => {    
    console.log(req.body);
    if(!(req.body.currentGame !== "")) {
        const response = {
            status: "error"
        }

        res.status(404).send(response);
        return;
    }

    const id = req.body.currentGame;

    try {    
        const query = { _id: new ObjectId(id) };
        const game = (await collections.games?.findOne(query)) as unknown as Game;
        if (game) {
            console.log("[express] Executed get on /games/" + id);
            res.status(200).send(game);
            return;
        }

        const response = {
            status: "nogame"
        }

        res.status(404).send(response);
    } catch (error) {
        console.log("[express] Failed to get on /games" + id);
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});