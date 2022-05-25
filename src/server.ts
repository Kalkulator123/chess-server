import { connectToDatabase } from "./services/database.service";
import { gamesRouter } from "./routes/games.router";
import config from "./config.json";
import bodyParser from "body-parser";

const express = require( "express" );
const cors = require( "cors" );
const app = express();

connectToDatabase()
    .then(() => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cors());

        app.use("/games", gamesRouter);

        app.listen(config.port, () => {
            console.log(`Server started at http://localhost:${config.port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
