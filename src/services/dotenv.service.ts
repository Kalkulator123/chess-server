import dotenv from "dotenv";
import { Ienv } from "../models/env.model";
import { IConfig } from "../models/config.model";

export class Dotenv {
	constructor() {
		dotenv.config();
	}

	private getConfig(): Ienv {
		return {
			DB_CONN_STRING: process.env.DB_CONN_STRING,
			DB_NAME: process.env.DB_NAME,
			COLLECTION_NAME: process.env.COLLECTION_NAME,
		};
	}

	public Config(): IConfig {
		const config = this.getConfig();

		for (const [key, value] of Object.entries(config)) {
			if (value === undefined) {
				throw new Error(`MISSING KEY ${key} IN .ENV CONFIGURATION!`);
			}
		}

		return config as IConfig;
	}
}
