import { exec } from "child_process";
import util from "util";

export class Stockfish {
    private _promise: Promise<any>;
    private execProm = util.promisify(exec);
    
    constructor() {
        this._promise = this.askStockfish(".\\stockfish\\stockfish.exe d");
    }

    private async askStockfish(command: string): Promise<any> {
        let result;

        try {
            result = await this.execProm(command);
        } catch(ex) {
            result = ex;
        }

        if(Error[Symbol.hasInstance](result)) return "";

        return result;
    }

    public async response() {
        const bar = await this.askStockfish(".\\stockfish\\stockfish.exe d");
        let output = bar.stdout.split("\n");
        let fen = output[output.length - 4].split(" ");
        console.log(fen[1]);
    };

    get promise(): Promise<any> {
        return this._promise;
    }
}