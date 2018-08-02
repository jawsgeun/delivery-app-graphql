export interface Order {
  id: number;
  user_id: number;
  restaurant_id: number;
  menu_id: number;
  date: string;
  age: string;
  gender: string;
}

export let orders: Order[] = [
  {
    id: 1,
    user_id: 1,
    restaurant_id: 1,
    menu_id: 1,
    date: '18년 8월 2일',
    age: '26',
    gender: '남',
  },
];
