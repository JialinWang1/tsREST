import { createUser } from '@service/user.service'
import { log } from '@utils/logger'
import { Request, Response } from 'express'
import { omit } from 'lodash'

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body)
    return res.send(omit(user, 'password'))
  } catch (error) {
    log.error(error)
    // 409 conflicted
    return res.status(409).send(error.message)
  }
}
