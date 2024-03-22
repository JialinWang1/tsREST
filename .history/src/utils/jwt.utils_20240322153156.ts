import config from 'config'
import JWT, { SignOptions } from 'jsonwebtoken'

const publicKey = config.get<string>('publicKey')
const privateKey = config.get<string>('privateKey')

const signJwt = (object: Object, options?: SignOptions) => {
  return JWT.sign(object, privateKey, { ...options, algorithm: 'RS256' })
}

const verifyJwt = () => {}
