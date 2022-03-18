import { exec } from "child_process";
import util from "util";

import config from "./config.json";

export class Stockfish {
    // private execProm = util.promisify(exec);

    // private async askStockfish(command: string): Promise<any> {
    //     let result;

    //     try {
    //         result = await this.execProm(command);
    //     } catch(ex) {
    //         result = ex;
    //     }

    //     if(Error[Symbol.hasInstance](result)) return "";

    //     return result;
    // }

    // public async getFen(): Promise<any> {
    //     const response = await this.askStockfish(config.stockfish_path + " d");
    //     let output = response.stdout.split('\n');
    //     output = output[output.length - 4].split(' ');
    //     output.shift();
    //     return output;
    // }

    // public async makeMove(move: string, fen: string) {
    //     const response = await this.askStockfish(config.stockfish_path + " position fen " + fen +  " moves " + move);
    // }

    public run() {
        let terminal = require('child_process').spawn(config.stockfish_path);

        terminal.stdout.on('data', (data: any) => {
            console.log('stdout: ' + data);
        });
        
        terminal.on('exit', (code: any) => {
            console.log('child process exited with code ' + code);
        });
        
        setTimeout(() => {
            console.log('Sending stdin to terminal');
            terminal.stdin.write('position startpos moves e2e4\n');
            terminal.stdin.write('d\n');
            console.log('Ending terminal session');
            terminal.stdin.end();
        }, 1000);
    }
}