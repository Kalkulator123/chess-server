import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { games?: mongoDB.Collection } = {};

export async function connectToDatabase() {
    dotenv.config()

    const DB_CONN_STRING: any = process.env.DB_CONN_STRING;
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
        DB_CONN_STRING
    );

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const COLLECTION_NAME: any = process.env.COLLECTION_NAME;
    const gamesCollection: mongoDB.Collection = db.collection(
        COLLECTION_NAME
    );

    collections.games = gamesCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`
    );
}
