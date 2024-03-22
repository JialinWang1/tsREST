import { createSession } from '@service/session.service'
import { findUserByEmail, validatePassword } from '@service/user.service'
import { signJwt } from '@utils/jwt.utils'
import { Request, Response } from 'express'

export const createUserSessionHandler = async (req: Request, res: Response) => {
  const user = await findUserByEmail(req.body)
  const isValid = await validatePassword(user)

  if (!isValid) {
    return res.status(401).send('Invalid email or password')
  }

  const session = createSession(user._id, req.get('user-agent'))

  const assessToken = signJwt({
    ...user,
  })
}
