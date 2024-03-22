import { createUserHandler } from "@controller/user.controller";
import { validate } from "@middleware/validateResouce";
import { Express, Request, Response } from "express";
const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.sendStatus(200);
  });

  app.post("/api/users", validate, createUserHandler);
};

export { routes };
