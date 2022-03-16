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

    public async response(command: string) {
        const bar = await this.askStockfish(config.stockfish_path + " " + command);
        let output = bar.stdout.split("\n");
        console.log(output[output.length - 4].split(" ")[1]);
    };

    
}