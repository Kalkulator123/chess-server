import config from "./config.json";

export class Stockfish {
    private readonly session = require('child_process').spawn(config.stockfish_path);

    constructor() {
        this.makeBestMove("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1").then((fen) => {
            console.log(fen);
        });
    }

    public async getFen(): Promise<string> {
        this.sendCommand("d");

        const output = new Promise<string>((resolve) => {
            this.session.stdout.on('data', (data: any) => {
                const board = data.toString().split('\n');

                if(board[0] === '\r') {
                    resolve(board);
                }
            });
        }).then(result => {
            return this.clearFen(result);
        });

        return (await output).join(' '); 
    }

    public async makeMove(fen: string[], move: string): Promise<string> {
        const stringFen = fen.join(" ");
        this.sendCommand(`position fen ${stringFen} moves ${move}`);

        return this.getFen(); 
    }

    public async getBestMove(fen: string): Promise<string> {
        this.sendCommand(`position fen ${fen}`);
        this.sendCommand(`go depth 5`);

        const output = new Promise<string>((resolve) => {
            this.session.stdout.on('data', (data: any) => {
                const log = data.toString().split('\n');

                if(log[log.length - 2].split(' ')[0] === "bestmove") {
                    resolve(log[log.length - 2].split(' ')[1]);
                }
            });
        });

        return output; 
    }

    public async makeBestMove(fen: string): Promise<string> {
        const output = new Promise<string>((resolve) => {
            this.getBestMove(fen).then((move) => {
                const command = `position fen ${fen} moves ${move}`;
                this.sendCommand(command);
                return;
            }).then(() => {
                this.getFen().then((result) => {
                    resolve(result);
                });
            });
        });

        return output;
    }

    private clearFen(fen: string): string[] {
        const result = fen[fen.length - 4].split(' ').reverse();
        result.pop();
        result[0] = result[0].substring(0, 1);
        
        return result.reverse();
    }

    private sendCommand(command: string) {
        this.session.stdin.write(command + '\n');
    }

    public endSession() {
        this.session.stdin.end();
    }
}