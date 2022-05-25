import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game from "../models/game";
import { Stockfish } from "../services/Stockfish.service";

export const gamesRouter = express.Router();

gamesRouter.use(express.json());

gamesRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const games = (await collections.games?.find({}).toArray()) as unknown as Game[];
        console.log("[express] Executed get on /games");
        res.status(200).send(games);
    } catch (error: any) {
        console.log("[express] Failed to get on /games");
        res.status(500).send(error.message);
    }
});

gamesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const game = (await collections.games?.findOne(query)) as unknown as Game;

        if (game) {
            console.log("[express] Executed get on /games/" + id);
            res.status(200).send(game);
        }
    } catch (error) {
        console.log("[express] Failed to get on /games" + id);
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

gamesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const stockfish = new Stockfish();
        const fen = await (await stockfish.getFen()).join(" ");

        const newGame = { fen: fen };
        const result = await collections.games?.insertOne(newGame);

        result
            ? res.status(201).send(`{ "fen": "${result.insertedId}" }`)
            : res.status(500).send("Failed to create a new game.");

        console.log("[express] Created game with id " + result?.insertedId);
    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

gamesRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {

        const queryOne = { _id: new ObjectId(id) };
        const gameOne = (await collections.games?.findOne(queryOne)) as unknown as Game;

        const stockfish = new Stockfish();
        const fen = await (await stockfish.autoBot(gameOne.fen.split(' '), req.body.move)).join(" ");

        const updatedGame = { fen: fen };

        const query = { _id: new ObjectId(id) };
        const result = await collections.games?.updateOne(query, { $set: updatedGame });

        result
            ? res.status(200).send(`{ "fen": "${updatedGame.fen}" }`)
            : res.status(304).send(`Game with id: ${id} not updated`);

        console.log("[express] Updated game with id " + id);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});