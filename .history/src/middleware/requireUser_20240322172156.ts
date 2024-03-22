import { NextFunction, Request, Response } from 'express'

export const requireUser = (
  res: Request,
  req: Response,
  next: NextFunction,
) => {
  if (!res.locals.user) {
    return res.send()
  }
  return next()
}
