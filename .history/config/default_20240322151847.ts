import fs from 'fs'
export default {
  port: 8888,
  dbUri: 'mongodb://garrin.com:27017/rest-api',
  salt: 10,
  privateKey: fs.readFileSync('/assets/jwt_private.pem'),
  publicKey: fs.readFileSync('/assets/jwt_public.cer'),
}
