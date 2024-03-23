import { UserDocument } from '@models/user.model'
import { createSession, findSessions } from '@service/session.service'
import { findUserByEmail, validatePassword } from '@service/user.service'
import { signJwt } from '@utils/jwt.utils'
import config from 'config'
import { Request, Response } from 'express'
import { get } from 'lodash'

export const createUserSessionHandler = async (
  req: Request<{}, {}, UserDocument>,
  res: Response,
) => {
  const { email, password } = req.body
  const user = await findUserByEmail(email)
  console.log(user)
  const isValid = await validatePassword(user, password)

  if (!isValid) {
    return res.status(401).send('Invalid email or password')
  }

  const session = await createSession(user._id, req.get('user-agent'))

  const assessToken = signJwt(
    {
      user: user._id,
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

export const getUserSessionHandler = async (req: Request, res: Response) => {
  const userId = get(res.locals.user, '_id', '')
  console.log('userID: ' + userId)
  const session = await findSessions({ user: userId, valid: true })
  return res.send(session)
}
