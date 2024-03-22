import mongoose from "mongoose";
import config from "config";
import { log } from "./logger";

const connect = () => {
  const dbUri = config.get<string>("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info("connected db mongo");
    })
    .catch((e) => {
      console.log("error while connecting db mongo: " + e);
      process.exit(1);
    });
};

export { connect };
