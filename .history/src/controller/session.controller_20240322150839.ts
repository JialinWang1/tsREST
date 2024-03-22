import { findUserByEmail, validatePassword } from '@service/user.service'
import { Request, Response } from 'express'

export const createUserSessionHandler = async (req: Request, res: Response) => {
  const user = findUserByEmail(req.body)
  const isValida = validatePassword(user)
}
