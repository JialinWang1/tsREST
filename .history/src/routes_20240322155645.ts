import { createUserSessionHandler } from '@controller/session.controller'
import { createUserHandler } from '@controller/user.controller'
import { validateResource } from '@middleware/validateResouce'
import { createUserSessionSchema } from '@schema/session.schema'
import { createUserSchema } from '@schema/user.schema'
import { Express, Request, Response } from 'express'

const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.sendStatus(200)
  })

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)
  app.post(
    '/api/sessions',
    validateResource(createUserSessionSchema),
    createUserSessionHandler,
  )
}

export { routes }
