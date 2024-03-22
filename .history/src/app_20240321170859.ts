import express from "express";
import config from "config";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { log } from "@utils/logger";
import { connect } from "@utils/connect";

const PORT = config.get<number>("port");
const app = express();

app.use(bodyParser);

app.listen(PORT, () => {
  log.info("8888 is running");
  connect();
  routes(app);
});
