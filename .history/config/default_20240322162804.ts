import fs from 'fs'
const a = {
  port: 8888,
  dbUri: 'mongodb://garrin.com:27017/rest-api',
  salt: 10,
  assessTokenExpiration: '15m',
  refreshTokenExpiration: '15d',
  privateKey: fs.readFileSync('./assets/jwt_private.pem', 'utf8'),
  publicKey: fs.readFileSync('./assets/jwt_public.cer'),
}
console.log(a.privateKey)

export default a
