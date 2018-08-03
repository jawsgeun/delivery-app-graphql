export interface Order {
  id: number;
  user_id: number;
  restaurant_id: number;
  menu_id: number;
  date: string;
  age: string;
  gender: string;
}

let orders: Order[] = [
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

export const getOrderByUserID = (id: number): Order[] => {
  return orders.filter((v: Order): boolean => {
    return v.user_id === id;
  });
};

export const getOrderByRestaurantID = (id: number): Order[] => {
  return orders.filter((v: Order): boolean => {
    return v.restaurant_id === id;
  });
};

export const addOrder = (order: Order): Order => {
  orders.push(order);
  return order;
};

export const removeOrderById = (id: number): Order => {
  let removed: Order;
  orders = orders.filter((v: Order): boolean => {
    if (v.id === id) {
      removed = v;
      return false;
    }
    return true;
  });
  return removed;
};

export const updateOrderById = (id: number, order: Order): Order => {
  let isChanged: boolean = false;
  orders = orders.map((v: Order): Order => {
    if (v.id === id) {
      v = order;
      isChanged = true;
    }
    return v;
  });
  if (isChanged) {
    return order;
  }
  return undefined;
};
