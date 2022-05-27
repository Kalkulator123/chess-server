import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game from "../models/game.model";
import { Stockfish } from "../services/Stockfish.service";

export const moveRouter = express.Router();

moveRouter.use(express.json());

moveRouter.post("/:id", async (req: Request, res: Response) => {
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