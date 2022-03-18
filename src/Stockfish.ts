import { exec } from "child_process";
import util from "util";

import config from "./config.json";

export class Stockfish {
    private readonly session = require('child_process').spawn(config.stockfish_path);

    constructor() {       
        this.session.on('exit', (code: any) => {
            console.log('child process exited with code ' + code);
        });
    }

    public getData(): any {
        return this.session;
    }

    public sendCommand(command: string) {
        setTimeout(() => {
            this.session.stdin.write(command + '\n');
        }, 1000);
    }

    public endSession() {
        setTimeout(() => {
            this.session.stdin.end();
        }, 1000);
    }
}