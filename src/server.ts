import config from "./config.json";
import express from 'express';
import fs from 'fs';

import { Game } from "./Game";
import { Stockfish } from "./Stockfish";

let sf = new Stockfish();

// const server = express();
// const PORT = config.port;

// server.use(express.json());

// server.listen(PORT, () => {
//         console.log(`\nhttp://localhost:${PORT}/\n`);
//     }
// );

// //server info
// server.get('/me', (req: any, res: any) => {
//     res.status(200).send({
//         name: 'server-chess',
//         version: '1.0.0'
//     })
// });

// let gameId = 0;
// server.post('/game/create', (req: any, res: any) => {
//     for(;;) {
//         if(!fs.existsSync('games/' + gameId + '.txt')) {
//             break;
//         }
//     }

//     const game = new Game(gameId);
//     game.makeMove('d');
//     game.listen().getData().stdout.on('data', (data: any) => {
//         let output = data.toString().split("\n");
//         if(output.length > 2) {
//             output = (output[output.length - 4].split(' '));
//             game.saveToFile(output);
//             setTimeout(() => {
//                 if(fs.existsSync('games/' + gameId + '.txt')) {
//                     fs.readFile('games/' + gameId++ + '.txt', (err, data) => {
//                         let out = data.toString();
//                         out = out.substring(1, out.length - 1).split('"').join("");
//                         let result = out.split(",");
//                         res.send(result);
//                     });
//                     return;
//                 }
//             }, 500);
//         }
//     });
// });

// //get fen

// server.get('/game/:id', (req: any, res: any) => {
//     const { id } = req.params;

//     if(isNaN(parseInt(id))) {
//         res.status(418).send({
//             message: 'err: no id'
//         });

//         return;
//     }

//         if(fs.existsSync('games/' + id + '.txt')) {
//             fs.readFile('games/' + id + '.txt', (err, data) => {
//                 let out = data.toString();
//                 out = out.substring(1, out.length - 1).split('"').join("");
//                 let result = out.split(",");
//                 res.send(result);
//             });
//             return;
//         }
// });


// //make move
// server.post('/game/:id/:move', (req: any, res: any) => {
//     const { id, move } = req.params;

//     if(isNaN(parseInt(id))) {
//         res.status(418).send({
//             message: 'err: no id'
//         });

//         return;
//     }

//     if(move === "") {
//         res.status(418).send({
//             message: 'err: no move'
//         });

//         return;
//     }

//     if(fs.existsSync('games/' + id + '.txt')) {
//         fs.readFile('games/' + id + '.txt', (err, data) => {
//             let game = new Game(id);
//             let out = data.toString();
//             out = out.substring(1, out.length - 1).split('"').join("");
//             let result = out.split(",");

//             game.makeMove('position fen ' + result[1] + " " + result[2] + " " + result[3] + " " + result[4] + " " + result[5] + " " + result[6] + " moves " + move);

//             setTimeout(() => {
//                 game.makeMove('d');
//                 game.listen().getData().stdout.on('data', (data: any) => {
//                     let output = data.toString().split("\n");
//                     if(output.length > 2) {
//                         output = (output[output.length - 4].split(' '));
//                         game.saveToFile(output);
//                     }
//                 });
//             }, 1000);
//         });
//     }
// });
