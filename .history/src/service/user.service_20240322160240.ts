import { UserDocument, UserModel } from '@models/user.model'
import { omit } from 'lodash'

export const createUser = async (input: UserDocument) => {
  try {
    const user = await UserModel.create(input)
    return omit(user.toJSON(), 'password')
  } catch (error) {
    throw new Error(error)
  }
}

export const findUserByEmail = async ({ email }: { email: string }) => {
  return await UserModel.findOne({ email })
}

export const validatePassword = async (user: UserDocument) => {
  if (user) {
    const isValid = user.comparePassword(user.password)
    return isValid
  }
}
