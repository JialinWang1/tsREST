import config from 'config'

const publicKey = config.get<string>('publicKey')
const privateKey = config.get<string>('privateKey')
const signJwt = () => {}

const verifyJwt = () => {}
