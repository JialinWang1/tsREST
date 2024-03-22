import { Request, Response } from "express";
import { log } from "@utils/logger";

export const createUserHandler = (req: Request, res: Response) => {
  try {
  } catch (error) {
    log.error(error);
    return res.status(409);
  }
};
