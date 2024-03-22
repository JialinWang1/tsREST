import { UserDocument, UserModel } from "@models/user.model";

export = async (input: UserDocument) => {
  try {
    return await UserModel.create(input);
  } catch (error) {}
};
