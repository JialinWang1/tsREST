import fs from 'fs'
import path from 'path'
const keyPath = path.join(__filename, 'assets/')
const a = {
  port: 8888,
  dbUri: 'mongodb://garrin.com:27017/rest-api',
  salt: 10,
  assessTokenExpiration: '15m',
  refreshTokenExpiration: '15d',
  privateKey: fs.readFileSync(`${keyPath}jwt_private.pem`, 'utf8'),
  publicKey: fs.readFileSync(`${keyPath}jwt_public.cer`),
}
console.log(JSON.parse(a.privateKey))

export default a
