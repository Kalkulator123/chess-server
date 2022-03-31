//TODO:
// - make move
// - get bot best move

import config from "./config.json";

export class Stockfish {
    private readonly session = require('child_process').spawn(config.stockfish_path);

    constructor() {
        this.getFen().then((data: any) => {
            console.log(data);
        });
    }

    public async getFen(): Promise<string[]> {
        this.session.stdin.write("d\n");

        const output = new Promise<string>((resolve) => {
            this.session.stdout.on('data', (data: any) => {
                const board = data.toString().split('\n');

                if(board[0] === '\r') {
                    resolve(board);
                }
            });
        }).then(result => {
            const fen = result[result.length - 4].split(' ').reverse();
            fen.pop();
            return fen.reverse();
        });

        return output; 
    }

    public endSession() {
        this.session.stdin.end();
    }
}