import { NextFunction, Request, Response, query } from 'express'
import { AnyZodObject } from 'zod'

const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      console.log(1)
      next()
    } catch (error) {
      return res.status(400).send(error.errors)
    }
  }

export { validateResource }
