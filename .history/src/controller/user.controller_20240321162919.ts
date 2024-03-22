import { Request, Response } from "express";
import { log } from "@utils/logger";
import { createUser } from "@service/user.service";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return user;
  } catch (error) {
    log.error(error);
    // 409 conflicted
    return res.status(409).send(error.message);
  }
};
