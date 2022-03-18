import { exec } from "child_process";
import util from "util";

import config from "./config.json";

export class Stockfish {
    private execProm = util.promisify(exec);

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

    public async getFen(): Promise<any> {
        const response = await this.askStockfish(config.stockfish_path + " d");
        let output = response.stdout.split('\n');
        output = output[output.length - 4].split(' ');
        output.shift();
        return output;
    }
}