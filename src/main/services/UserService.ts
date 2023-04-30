import { User } from "../db/models/user";

export const createUser = async (
  data: any,
  optionA: any
): Promise<User | void> => {
  return User.create(data, optionA);
};

export const updateUser = async (
  data: Partial<User>,
  options: any,
  transaction: any
) => {
  try {
    const result = await User.update(data, {
      ...options,
      transaction,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

export const getUsers = async (): Promise<User[]> => {
  return User.findAll();
};

export const getUser = async (id: number): Promise<User | null> => {
  return User.findByPk(id);
};

export const deleteUser = async (options: any, transaction: any) => {
  try {
    const result = await User.destroy({
      ...options,
      transaction,
    });
    return result;
  } catch (err) {
    throw err;
  }
};
