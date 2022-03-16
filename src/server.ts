import config from "./config.json";

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

server.get('/game/fen', (req: any, res: any) => {
    const { id } = req.params;

    if(false) {
        res.status(418).send({
            message: 'err: need logo'
        });
    }

    res.send({
        tshirt: 'yay!'
    });
})

// import { Game, GameType } from './Game';
// import { BetterFen } from './BetterFen';
// import { Unit, UnitType } from "./Unit";

// const myFen = new BetterFen("rnbqkbnr/p3pppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
// console.log(myFen.stringValue);

// import { Stockfish } from "./Stockfish";

// let stockfish = new Stockfish();
// stockfish.response("d");