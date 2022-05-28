import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game, { IGame } from "../models/game.model";
import { Stockfish } from "../services/Stockfish.service";

export const gamesRouter = express.Router();

gamesRouter.use(express.json());

gamesRouter.get("/", async (req: Request, res: Response) => {
    if(!(req.session && req.session.currentGame !== "")) {
        const response = {
            status: "error"
        }

        res.status(404).send(response);
        return;
    }

    const id = req.session.currentGame;

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

gamesRouter.post("/create/:team/:bot", async (req: Request, res: Response) => {
    if(req.session === undefined || (req.session && req.session.playerId === undefined || req.session && req.session.currentGame !== "")
    || req.params.team === undefined || req.params.bot === undefined) {
        const response = {
            status: "error"
        }

        res.send(response);
        return;
    }

    try {
        const selectedTeam = req.params.team;
        const bot = req.params.bot === "player" ? req.params.bot : "bot";

        let fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        if(bot === "bot" && selectedTeam === "black") {
            const stockfish = new Stockfish();
            fen = (await stockfish.makeBestMove(fen.split(' '))).join(" ");
        }

        const game: IGame = {
            fen: fen,
            status: "started",
            whitePlayer: (selectedTeam === "white" && req.session) ? req.session.playerId : (bot === "bot") ? "stockfish" : "",
            blackPlayer: (selectedTeam === "black" && req.session) ? req.session.playerId : (bot === "bot") ? "stockfish" : ""
        }

        const result = await collections.games?.insertOne(game);

        const response = {
            id: result ? result.insertedId : "",
            status: result ? game.status : "error"
        }

        if(req.session) req.session.currentGame = response.id;

        result
            ? res.status(201).send(response)
            : res.status(500).send(response);

    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

gamesRouter.post("/join/:id", async (req: Request, res: Response) => {
    if(req.session === undefined || (req.session && req.session.playerId === undefined || req.session && req.session.currentGame !== "")
    || req.params.id === undefined) {
        const response = {
            status: "error"
        }

        res.send(response);
        return;
    }

    const id = req.params.id;

    try {
        const query = { _id: new ObjectId(id) };
        const game = (await collections.games?.findOne(query)) as unknown as Game;

        if (game) {
            console.log("[express] Executed get on /games/" + id);
            
            const newGame: IGame = {
                fen: game.fen,
                status: game.status,
                whitePlayer: game.whitePlayer === "" && req.session ? req.session.playerId : game.whitePlayer,
                blackPlayer: game.blackPlayer === "" && req.session ? req.session.playerId : game.blackPlayer
            }

            const query = { _id: new ObjectId(id) };
            const result = await collections.games?.updateOne(query, { $set: newGame });

            if(result && req.session) {
                req.session.currentGame = id;

                const response = {
                    id: id,
                    status: newGame.status
                }

                res.status(200).send(response);
            } else {
                const response = {
                    status: "error"
                }

                res.status(404).send(response);
            }

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

gamesRouter.post("/quit", async (req: Request, res: Response) => {
    if(req.session === undefined || (req.session && req.session.playerId === undefined || req.session && req.session.currentGame === "")) {
        const response = {
            status: "error"
        }

        res.send(response);
        return;
    }

    if(req.session) req.session.currentGame = "";

    const response = {
        status: "quit"
    }

    res.status(200).send(response);
});
