export enum GameType {
    Stockfish,
    Versus,
    Sandbox
}

// Base game class
export class Game {
    private readonly _id: number;
    private type: GameType;
    private board: any;

    constructor(id = 0, gameType = GameType.Stockfish) {
        this._id = id;
        this.type = gameType;
    }

    get id(): number {
        return this._id;
    }

    get gameType(): GameType {
        return this.type;
    }

    set gameType(gameType: GameType) {
        this.type = gameType;
    }
}