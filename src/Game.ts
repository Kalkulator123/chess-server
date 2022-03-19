import { Stockfish } from "./Stockfish";

const fs = require('fs');

export class Game {
    private readonly _id: number;
    private readonly stockfish: Stockfish = new Stockfish();

    constructor(id = 0) {
        this._id = id;

        // this.stockfish.sendCommand('position startpos moves e2e4');

        // this.stockfish.sendCommand('position startpos moves e2e4 g8f6');

        //this.stockfish.sendCommand('d');
    }

    public listen() {
        return this.stockfish;
    }

    public makeMove(move: string) {
        this.stockfish.sendCommand(move);
    }

    public saveToFile(fen: string[]) {
        let file = fs.createWriteStream("games/" + this.id.toString() + ".txt");
        let json = JSON.stringify(fen);
        file.write(json);
        file.end();
    }

    public loadFromFile() {
        fs.readFile("games/" + this.id.toString() + ".txt", (err: any, data: any) => {
            if(err) {
                throw err;
            }
            console.log(data);
        });
    }

    get id(): number {
        return this._id;
    }
}