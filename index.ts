/**
 * Setup app root
 */
import * as path from "path";
(global as any).appRoot = path.resolve(__dirname);

/**
 * Setup .env
 */
import * as dotenv from "dotenv";
dotenv.config();

/**
 * Custom logger
 */
import * as http from "http";
import Logger from "./src/main/utils/logger";

/**
 * Setup Server
 */
import app from "./app";
import initializeDatabase from './src/main/db/config/index';

const logger = new Logger().logger();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT);

initializeDatabase();
server.on("listening", () => {
  logger.info(`App started on port ${PORT}`);
});

