import { deserializeUser } from '@middleware/deserializeUser'
import { connect } from '@utils/connect'
import { log } from '@utils/logger'
import config from 'config'
import express from 'express'
import { routes } from './routes'

const PORT = config.get<number>('port')
const app = express()

app.use(express.json())
app.use(deserializeUser)
app.listen(PORT, async () => {
  log.info('8888 is running')
  await connect()
  routes(app)
})
