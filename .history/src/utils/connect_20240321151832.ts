import { logger } from "./logger";
import mongoose from "mongoose";
import config from "config";

const connect = () => {
  const dbUri = config.get<string>("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.log("connected db mongo");
    })
    .catch((e) => {
      console.log("error while connecting db mongo: " + e);
      process.exit(1);
    });
};

export { connect };
