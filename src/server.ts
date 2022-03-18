import config from "./config.json";

import { Game } from "./Game";
import { Stockfish } from "./Stockfish";

const express = require('express');
const server = express();
const PORT = config.port;

server.use(express.json());

server.listen(PORT, () => {
        console.log(`\nhttp://localhost:${PORT}/\n`);
    }
);

server.get('/me', (req: any, res: any) => {
    res.status(200).send({
        name: 'server-chess',
        version: '1.0.0'
    })
});

server.get('/game/:id', (req: any, res: any) => {
    const { id } = req.params;

    if(isNaN(parseInt(id))) {
        res.status(418).send({
            message: 'err: no id'
        });

        return;
    }

    const game = new Game(id);
    // res.send(game.getFen());
});

server.post('/game/:id', (req: any, res: any) => {
    const { id } = req.params;
    const { move } = req.body.move;

    if(isNaN(parseInt(id))) {
        res.status(418).send({
            message: 'err: no id'
        });

        return;
    }

    if(move === "") {
        res.status(418).send({
            message: 'err: no move'
        });

        return;
    }
});

let stockfish = new Stockfish();
stockfish.run();

// import { Game, GameType } from './Game';
// import { BetterFen } from './BetterFen';
// import { Unit, UnitType } from "./Unit";

// const myFen = new BetterFen("rnbqkbnr/p3pppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
// console.log(myFen.stringValue);

// import { Stockfish } from "./Stockfish";

// let stockfish = new Stockfish();
// stockfish.response("d");