import { UserDocument, UserModel } from "@models/user.model";

export const createUser = async (input: UserDocument) => {
  try {
    return await UserModel.create(input);
  } catch (error) {
    throw new Error(error);
  }
};
