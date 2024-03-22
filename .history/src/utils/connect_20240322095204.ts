import { log } from '@utils/logger'
import config from 'config'
import mongoose from 'mongoose'

const connect = () => {
  const dbUri = config.get<string>('dbUri')

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info('connected db mongo')
    })
    .catch((e) => {
      log.info('error while connecting db mongo: ' + e)
      process.exit(1)
    })
}

export { connect }
