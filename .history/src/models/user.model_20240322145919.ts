import bcrypt from 'bcrypt'
import config from 'config'
import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
  email: string
  name: string
  password: string
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<Boolean>
}
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

userSchema.pre('save', async function (next) {
  const user = this as UserDocument
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(config.get<number>('salt'))
    const hash = bcrypt.hashSync(user.password, salt)
    user.password = hash
  }
  return next()
})

userSchema.methods.comparePassword = async functio (candidatePassword: string) {
  const user = this as UserDocument
  return bcrypt.compareSync(candidatePassword, user.password)
}

const UserModel = mongoose.model<UserDocument>('User', userSchema)

export { UserModel }
