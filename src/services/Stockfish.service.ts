import config from "../config.json";

export class Stockfish {
    private readonly session = require('child_process').spawn(config.stockfish_path);

    private async getFen(): Promise<string[]> {
        this.sendCommand("d");
        const fenArray = await this.getBuffer('Fen');
        
        return this.clearFen(this.separateFen(fenArray)); 
    }

    public async makeMove(fen: string, move: string): Promise<string[]> {
        this.sendCommand(`position fen ${fen} moves ${move}`);
        return this.getFen(); 
    }

    public async makeBestMove(fen: string): Promise<string[]> {
        const bestmove = await this.getBestMove(fen);
        this.sendCommand(`position fen ${fen} moves ${bestmove}`);

        return await this.getFen();
    }

    public endSession() {
        this.session.stdin.end();
    }

    private getBuffer(mustContain: string): Promise<string[]> {
        return new Promise<string[]>((resolve) => {
                this.session.stdout.on('data', (data: any) => {
                const bufferStringArray = data.toString().split('\n');

                if(this.arrayContains(bufferStringArray, mustContain)) {
                    resolve(bufferStringArray);
                }
            })
        });
    }

    private arrayContains(stringArray: string[], substring: string): boolean {
        for(let i = 0; i < stringArray.length; i++) {
            if (stringArray[i].includes(substring)) {
                return true;
            }
        }

        return false;
    }

    private async getBestMove(fen: string): Promise<string> {
        this.sendCommand(`position fen ${fen}`);
        this.sendCommand(`go depth 5`);

        const bestmoveLine = await this.getBuffer('bestmove');
        
        return this.separateBestmove(bestmoveLine); 
    }

    private separateBestmove(bestmoveStringArr: string[]): string {
        let bestmove = "";
        for(let i = 0; i < bestmoveStringArr.length; i++) {
            if (bestmoveStringArr[i].includes("bestmove")) {
                bestmove = bestmoveStringArr[i];
            }
        }

        return bestmove.split(' ')[1];
    }

    private clearFen(fen: string): string[] {
        let fenArr = fen.split(' ').reverse();
        fenArr[0] = fenArr[0].substring(0, 1);
        fenArr.pop();

        return fenArr.reverse();
    }

    private separateFen(array: string[]): string {
        for(let i = 0; i < array.length; i++) {
            if (array[i].includes("Fen")) {
                return array[i];
            }
        }

        return "";
    }

    private sendCommand(command: string) {
        this.session.stdin.write(command + '\n');
    }
}