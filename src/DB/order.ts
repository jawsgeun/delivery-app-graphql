import { Order } from './models/index';

export interface Order {
  id: number;
  user_id: number;
  restaurant_id: number;
  menu_id: number;
  date: string;
  age: string;
  gender: string;
}

export const getOrderByUserID = async (id: number): Promise<Order[]> => {
  return await Order.findAll({
    where: {
      user_id: id,
    },
  });
};

export const getOrderByRestaurantID = async (id: number): Promise<Order[]> => {
  return await Order.findAll({
    where: {
      restaurant_id: id,
    },
  });
};

export const registerOrder = async (order: Order): Promise<string> => {
  const result = await Order.create(order);
  return result ? 'success' : 'error';
};

export const removeOrderById = async (id: number): Promise<string> => {
  const affectedRow = await Order.destroy({
    where: {
      id,
    },
  });
  return affectedRow === 0 ? 'not exist' : 'completed';
};

export const updateOrderById = async (id: number, order: Order): Promise<Order> => {
  const result = await Order.update(
    order,
    {
      where: {
        id,
      },
    },
  );
  const affectedRow = result[0];
  return affectedRow === 0 ? undefined : order;
};
