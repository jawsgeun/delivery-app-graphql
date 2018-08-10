import { Restaurant } from './models/index';

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  category: string;
  min_price: string;
  detail: string;
  average_rating: number;
}

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  return await Restaurant.findAll();
};
export const getRestaurantsByCategory = async (category: string): Promise<Restaurant[]> => {
  return await Restaurant.findAll({
    where: {
      category,
    },
  });
};
export const registerRestaurant = async (restaurant: Restaurant): Promise<string> => {
  const result = await Restaurant.findOrCreate({
    where: {
      name: restaurant.name,
      address: restaurant.address,
    },
    defaults: restaurant,
  });
  const created = result[1];
  return created ? 'success' : 'duplicated';
};
export const removeRestaurantById = async (id: number): Promise<string> => {
  const affectedRow = await Restaurant.destroy({
    where: {
      id,
    },
  });
  return affectedRow === 0 ? 'not exist' : 'completed';
};
export const updateRestaurantById = async (id: number, restaurant: Restaurant): Promise<Restaurant> => {
  const result = await Restaurant.update(
    restaurant,
    {
      where: {
        id,
      },
    },
  );
  const affectedRow = result[0];
  return affectedRow === 0 ? undefined : restaurant;
};
