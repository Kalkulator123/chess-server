// const express = require('express');
// const server = express();
// const PORT = 8080;

// server.use(express.json());

// server.listen(PORT, () => {
//         console.log(`\nHi, im alive now... \nhttp://localhost:${PORT}/\n`);
//     }
// );

// server.get('/me', (req: any, res: any) => {
//     res.status(200).send({
//         name: 'server-chess',
//         version: '1.0.0'
//     })
// });

// server.post('me/:id', (req: any, res: any) => {
//     const { id } = req.params;
//     const { logo } = req.body;

//     if(!logo) {
//         res.status(418).send({
//             message: 'err: need logo'
//         });
//     }

//     res.send({
//         tshirt: 'yay!'
//     });
// })

import { Game, GameType } from './Game';
import { BetterFen } from './BetterFen';
import { Unit, UnitType } from "./Unit";

const myFen = new BetterFen("rnbqkbnr/p3pppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
console.log(myFen.stringValue);