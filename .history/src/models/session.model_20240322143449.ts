import bcrypt from 'bcrypt'
import config from 'config'
import mongoose from 'mongoose'
import { UserDocument } from './user.model'

export interface SessionDocument extends mongoose.Document {
  user: UserDocument
  valid: string
}
const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
  },
  { timestamps: true },
)

const SessionModel = mongoose.model('Session', sessionSchema)

export { SessionModel }
