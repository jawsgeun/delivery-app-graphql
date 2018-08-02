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

export let users: User[] = [
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
