import config from 'config'
import JWT, { SignOptions } from 'jsonwebtoken'

const publicKey = config.get<string>('publicKey')
const privateKey = config.get<string>('privateKey')

const signJwt = (object: Object, options?: SignOptions) => {
  return JWT.sign(object, privateKey, { ...options, algorithm: 'RS256' })
}

const verifyJwt = (token: string) => {
  try {
    const decoded = JWT.verify(token, publicKey)
    return {
      valid: true,
      expired: false,
      decoded,
    }
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    }
  }
}

export { signJwt, verifyJwt }
