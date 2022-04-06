import { ObjectId } from "mongodb";

export default class Game {
    constructor(
        public name: string,
        public fen: string,
        public id?: ObjectId) {}
}