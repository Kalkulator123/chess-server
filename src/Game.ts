import { BetterFen } from "./BetterFen";
import { Stockfish } from "./Stockfish";
import { Unit } from "./Unit";

export class Game {
    private readonly _id: number;
    private readonly fen: BetterFen = new BetterFen();
    private readonly stockfish: Stockfish = new Stockfish();

    constructor(id = 0) {
        this._id = id;
    }

    // private updateFen() {
    //     this.stockfish.getFen().then(stockfishResponse => {
    //         this.fen.setFenByString(stockfishResponse[0]);
    //     });
    // }

    // public getFen(): Unit[][] {
    //     this.updateFen();
    //     return this.fen.value;
    // }

    // public makeMove(move: string) {
    //     this.updateFen();
    //     this.stockfish.makeMove(move, this.fen.stringValue).then(res => {

    //     });
    // }

    get id(): number {
        return this._id;
    }
}