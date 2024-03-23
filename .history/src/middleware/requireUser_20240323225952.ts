import { NextFunction, Request, Response } from 'express'

export const requireUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(res.locals)

  if (!res.locals.user) {
    return res.sendStatus(403)
  }
  return next()
}
