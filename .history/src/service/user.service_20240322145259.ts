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

export async function validatePassword({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const user = await UserModel.findOne({ email })

  if (user) {
    const isValid = user.comparePassword(password)
    return isValid ? omit(user.toJSON(), 'password') : false
  }
}