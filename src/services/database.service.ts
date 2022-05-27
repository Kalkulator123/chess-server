import * as mongoDB from "mongodb";
import { IConfig } from "../models/config.model";
import { Dotenv } from "./dotenv.service";

export const collections: { games?: mongoDB.Collection } = {};

export async function connectToDatabase() {
    const env = new Dotenv();
    const config: IConfig = env.Config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
        config.DB_CONN_STRING
    );

    await client.connect();

    const db: mongoDB.Db = client.db(config.DB_NAME);

    const gamesCollection: mongoDB.Collection = db.collection(
        config.COLLECTION_NAME
    );

    collections.games = gamesCollection;

    console.log(
        `Successfully connected to database: ${config.DB_NAME} and collection: ${config.COLLECTION_NAME}`
    );
}
