import mongoose from "mongoose";
import { mongoose_config } from "../config/config";
import logger from "../config/logger";

let server;

const init = (app) => {
  mongoose.set("debug", true);
  mongoose.connect(mongoose_config().url, mongoose_config().options).then(() => {
    logger.info("Connected to MongoDB");
    server = app.listen(process.env.PORT, () => {
      logger.info(`Listening to port ${process.env.PORT}`);
    });
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        logger.info("Server closed");
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  };

  const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
  };

  process.on("uncaughtException", unexpectedErrorHandler);
  process.on("unhandledRejection", unexpectedErrorHandler);

  process.on("SIGTERM", () => {
    logger.info("SIGTERM received");
    if (server) {
      server.close();
    }
  });
};
export default init;
