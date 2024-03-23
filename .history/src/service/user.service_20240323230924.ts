import { UserDocument, UserModel } from '@models/user.model'
import { omit } from 'lodash'

export const createUser = async (input: UserDocument) => {
  try {
    const user = await UserModel.create(input)
    console.log(user)
    return omit(user.toJSON(), 'password')
  } catch (error) {
    throw new Error(error)
  }
}

export const findUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email }).lean()
}

export const validatePassword = async (
  user: UserDocument,
  password: string,
) => {
  if (user) {
    const isValid = await user.comparePassword(password)
    return isValid
  }
}
