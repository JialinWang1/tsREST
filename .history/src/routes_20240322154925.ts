import { createUserHandler } from '@controller/user.controller'
import { validateResource } from '@middleware/validateResouce'
import { createUserSchema } from '@schema/user.schema'
import { Express, Request, Response } from 'express'

const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.sendStatus(200)
  })

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)
  app.post(
    '/api/session',
    validateResource(createUserSchema),
    createUserHandler,
  )
}

export { routes }
