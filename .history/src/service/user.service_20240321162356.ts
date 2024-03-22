import { UserModel } from "@models/user.model";

export = async (input: Document) => {
  try {
    return await UserModel.create(input);
  } catch (error) {}
};
