import express from "express";
import config from "config";

const PORT = config.get<number>("port");
const app = express();

app.listen(8888, () => {
  console.log("8888 is running");
});
