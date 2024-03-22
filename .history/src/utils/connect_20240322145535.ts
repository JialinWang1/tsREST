import { log } from '@utils/logger'
import config from 'config'
import mongoose from 'mongoose'

const connect = async () => {
  const dbUri = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
    log.info('connected db mongo')
  } catch (e) {
    log.info('error while connecting db mongo: ' + e)
    process.exit(1)
  }
}

export { connect }
