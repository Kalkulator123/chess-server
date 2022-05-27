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

    req.session = cookieSession;
    res.send(cookieSession);
});

playerRouter.post("/delete", async (req: Request, res: Response) => {
    req.session = undefined;

    const response = {
        status: "deleted"
    }

    res.send(response);
});

playerRouter.get("/", async (req: Request, res: Response) => {
    if(req.session === undefined) {
        const response = {
            status: "no session"
        }

        res.status(404).send(response);
        return;
    }

    const response: ISession = {
        playerId: req.session ? req.session.playerId : "",
        currentGame: req.session ? req.session.currentGame : ""
    }

    res.send(response);
});