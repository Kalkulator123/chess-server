import express, { Request, Response } from "express";
import { ISession } from "../models/session.model"
import { Session } from "../services/session.service";

export const playerRouter = express.Router();

playerRouter.use(express.json());

playerRouter.post("/create", async (req: Request, res: Response) => {
    const session = new Session();

    const cookieSession: ISession = {
        playerId: session.id(),
        currentGame: ""
    }

    res.send(cookieSession);
});
