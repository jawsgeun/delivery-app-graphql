import { User } from './models/index';

export interface User {
  id: number;
  email: string;
  password: string;
  profile_url: string;
  name: string;
  join_date: string;
  age: string;
  birthday: string;
  gender: string;
  grade: string;
}

export const getAllUsers = async (): Promise<User[]> => {
  return await User.findAll({ raw: true });
};

export const login = async (email: string, password: string): Promise<User> => {
  return await User
    .findOne({
      where: {
        email,
        password,
      },
    });
};

export const registerUser = async (input: User): Promise<string> => {
  const result = await User
    .findOrCreate({
      where: {
        email: input.email,
      },
      defaults: input,
    });
  const created = result[1];
  return created ? 'success' : 'duplicated';
};

export const removeUserById = async (id: number): Promise<string> => {
  const affectedRow = await User
    .destroy({
      where: {
        id,
      },
    });
  return affectedRow === 0 ? 'not exist' : 'completed';
};

export const updateUserById = async (id: number, user: User): Promise<User> => {
  const result = await User.update(
    user,
    {
      where: {
        id,
      },
    },
  );
  const affectedRow = result[0];
  return affectedRow === 0 ? undefined : user;
};
