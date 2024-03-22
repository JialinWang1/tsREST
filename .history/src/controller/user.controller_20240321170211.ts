import { Request, Response } from "express";
import { log } from "@utils/logger";
import { createUser } from "@service/user.service";
``;
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    return await createUser(req.body);
  } catch (error) {
    log.error(error);
    // 409 conflicted
    return res.status(409).send(error.message);
  }
};
