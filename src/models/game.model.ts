import { ObjectId } from "mongodb";

export default class Game {
    constructor(
        public fen: string,
        public status: string,
        public whitePlayer: string,
        public blackPlayer: string,
        public id?: ObjectId) {}
}

export interface IGame {
    fen: string,
    status: string,
    whitePlayer: string,
    blackPlayer: string,
    id?: ObjectId
}