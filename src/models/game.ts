import { ObjectId } from "mongodb";

export default class Game {
    constructor(
        public fen: string,
        public id?: ObjectId) {}
}