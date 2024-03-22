import { UserDocument } from '@models/user.model'
import { createSession } from '@service/session.service'
import { findUserByEmail, validatePassword } from '@service/user.service'
import { signJwt } from '@utils/jwt.utils'
import config from 'config'
import { Request, Response } from 'express'

export const createUserSessionHandler = async (
  req: Request<{}, {}, UserDocument>,
  res: Response,
) => {
  const { email, password } = req.body
  const user = await findUserByEmail(email)
  const isValid = await validatePassword(user, password)

  if (!isValid) {
    return res.status(401).send('Invalid email or password')
  }

  const session = await createSession(user._id, req.get('user-agent'))

  const assessToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get('assessTokenExpiration') },
  )
  const refreshToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get('refreshTokenExpiration') },
  )

  return res.send({ assessToken, refreshToken })
}
