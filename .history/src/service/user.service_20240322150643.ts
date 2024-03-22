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

export const findUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email })
}

export const validatePassword = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const user = await UserModel.findOne({ email })

  if (user) {
    const isValid = user.comparePassword(password)
    return isValid ? omit(user.toJSON(), 'password') : false
  }
}
