//todo:
//add create game
//add make move
//add getfen from file if game exists



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
    game.listen().getData().stdout.on('data', (data: any) => {
        let output = data.toString().split("\n");
        if(output.length > 2) {
            output = (output[output.length - 4].split(' '));
            game.saveToFile(output);
            res.send(output.slice(1));
        }
    });
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

    const game = new Game(id);
});

let game = new Game();