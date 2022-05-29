import { connectToDatabase } from "./services/database.service";
import { gamesRouter } from "./routes/games.router";
import config from "./config.json";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import cors from "cors";
import { Sigma } from "./services/sigma.service";
import { playerRouter } from "./routes/player.router";
import { moveRouter } from "./routes/move.router";

const app = express();

connectToDatabase()
	.then(() => {
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(cookieSession({ keys: ["secure-key"] }));

		const corsOptions = {
			origin: `http://localhost:3000`,
			credentials: true,
			optionSuccessStatus: 200,
		};

		app.use(cors(corsOptions));

		app.use("/game", gamesRouter);
		app.use("/move", moveRouter);
		app.use("/player", playerRouter);

		app.listen(config.port, () => {
			const logo = new Sigma();

			logo.draw();
			console.log(`Server started at http://localhost:${config.port}`);
		});
	})
	.catch((error: Error) => {
		console.error("Database connection failed", error);
		process.exit();
	});
