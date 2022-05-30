import config from "../config.json";

export class Stockfish {
	private readonly session = require("child_process").spawn(
		config.stockfish_path
	);

	public async getFen(): Promise<string[]> {
		this.sendCommand("d");
		const fenArray = await this.getBuffer("Fen");

		return this.clearFen(this.separateFen(fenArray));
	}

	public async autoBot(fen: string[], move: string): Promise<string[]> {
		const userMove = await this.makeMove(fen, move);

		if (userMove[0] === fen[0]) {
			console.log("here");
			return fen;
		}

		const botMove = await this.makeBestMove(userMove);

		return botMove;
	}

	public async makeMove(fen: string[], move: string): Promise<string[]> {
		this.sendCommand(`position fen ${fen.join(" ")} moves ${move}`);
		return this.getFen();
	}

	public async makeBestMove(fen: string[]): Promise<string[]> {
		const bestmove = await this.getBestMove(fen.join(" "));

		this.sendCommand(`position fen ${fen.join(" ")} moves ${bestmove}`);
		console.log(`position fen ${fen.join(" ")} moves ${bestmove}`);
		return await this.getFen();
	}

	public endSession() {
		this.session.stdin.end();
	}

	private getBuffer(mustContain: string): Promise<string[]> {
		return new Promise<string[]>(resolve => {
			this.session.stdout.on("data", (data: any) => {
				const bufferStringArray = data.toString().split("\n");

				if (this.arrayContains(bufferStringArray, mustContain)) {
					resolve(bufferStringArray);
				}
			});
		});
	}

	private arrayContains(stringArray: string[], substring: string): boolean {
		for (let i = 0; i < stringArray.length; i++) {
			if (stringArray[i].includes(substring)) {
				return true;
			}
		}

		return false;
	}

	private async getBestMove(fen: string): Promise<string> {
		this.sendCommand(`position fen ${fen}`);
		this.sendCommand(`go depth 15`);

		const bestmoveLine = await this.getBuffer("bestmove");

		return this.separateBestmove(bestmoveLine);
	}

	public async checkNextMove(fen: string): Promise<string> {
		this.sendCommand(`position fen ${fen}`);
		this.sendCommand(`go depth 15`);

		const bestmoveLine = await this.getBuffer("bestmove");

		return this.separateBestmove(bestmoveLine);
	}

	private separateBestmove(bestmoveStringArr: string[]): string {
		if (this.find(bestmoveStringArr, "bestmove")) {
			return this.find(bestmoveStringArr, "bestmove").split(" ")[1];
		}

		return "";
	}

	private clearFen(fen: string): string[] {
		let fenArr = fen.split(" ").reverse();
		fenArr[0] = fenArr[0].substring(0, 1);
		fenArr.pop();

		return fenArr.reverse();
	}

	private find(array: string[], str: string): string {
		for (let i = 0; i < array.length; i++) {
			if (array[i].includes(str)) {
				return array[i];
			}
		}

		return "";
	}

	private separateFen(array: string[]): string {
		if (this.find(array, "Fen")) {
			return this.find(array, "Fen");
		}

		return "";
	}

	private sendCommand(command: string) {
		this.session.stdin.write(command + "\n");
	}
}
