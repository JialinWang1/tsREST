import express from "express";
import config from "config";
import { connect } from "./utils/connect";
import { log } from "./utils/logger";
import { routes } from "./routes";

const PORT = config.get<number>("port");
const app = express();

app.listen(PORT, () => {
  log.info("8888 is running");
  connect();
  routes(app);
});
