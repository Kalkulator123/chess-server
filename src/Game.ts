import { BetterFen } from "./BetterFen";
import { Stockfish } from "./Stockfish";

export class Game {
    private readonly _id: number;
    private readonly fen: BetterFen = new BetterFen();
    private readonly stockfish: Stockfish = new Stockfish();

    constructor(id = 0) {
        this._id = id;
    }

    private updateFen() {
        this.stockfish.response("d").then(res => {
            //const output = res.split("\n");
        });
    }

    get id(): number {
        return this._id;
    }
}