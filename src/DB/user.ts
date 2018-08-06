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

let users: User[] = [
  {
    id: 1,
    email: 'whtnrms@naver.com',
    password: '123123',
    profile_url: '/profile/whtnrms/jaws',
    name: '조수근',
    join_date: '2018년 8월 1일',
    age: '26',
    birthday: undefined,
    gender: 'm',
    grade: 'gold',
  },
];

const isExist = (input: User): boolean => {
  if (users.filter((v: User) => {
    return v.email === input.email;
  }).length > 0) {
    return true;
  }
  return false;
};

export const getAllUsers = (): User[] => {
  return users;
};

export const login = (email: string, password: string): User => {
  const result = users.filter((v: User) => {
    return v.email === email && v.password === password;
  });
  if (result.length === 0) {
    return undefined;
  }
  return result[0];
};

export const registerUser = (input: User): string => {
  if (isExist(input)) {
    return 'duplicated';
  }
  input.id = 1;
  if (users.length > 0) {
    input.id = users[users.length - 1].id + 1;
  }
  users.push(input);
  return 'success';
};

export const removeUserById = (id: number): User => {
  let removed: User;
  users = users.filter((v: User): boolean => {
    if (v.id === id) {
      removed = v;
      return false;
    }
    return true;
  });
  return removed;
};

export const updateUserById = (id: number, user: User): User => {
  let isChanged: boolean = false;
  users = users.map((v: User): User => {
    if (v.id === id) {
      v = user;
      isChanged = true;
    }
    return v;
  });
  if (isChanged) {
    return user;
  }
  return undefined;
};
