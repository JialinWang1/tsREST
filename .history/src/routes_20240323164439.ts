import {
  createUserSessionHandler,
  getUserSessionHandler,
} from '@controller/session.controller'
import { createUserHandler } from '@controller/user.controller'
import { deserializeUser } from '@middleware/deserializeUser'
import { requireUser } from '@middleware/requireUser'
import { validateResource } from '@middleware/validateResource'
import { createUserSessionSchema } from '@schema/session.schema'
import { createUserSchema } from '@schema/user.schema'
import { Express, Request, Response } from 'express'

const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.sendStatus(200)
  })

  app.post(
    '/api/create-user',
    validateResource(createUserSchema),
    createUserHandler,
  )
  app.post(
    '/api/sessions',
    validateResource(createUserSessionSchema),
    createUserSessionHandler,
  )
  app.get('/api/sessions', requireUser, getUserSessionHandler)
}

export { routes }
