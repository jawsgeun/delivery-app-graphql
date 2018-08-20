import { Menu } from './models/index';

export interface Menu {
  id: number;
  restaurant_id: number;
  name: string;
  price: string;
}

export const getMenuByRestaurantId = async (id: number): Promise<Menu[]> => {
  return await Menu.findAll({
    where: {
      restaurant_id: id,
    },
  });
};

export const registerMenu = async (menu: Menu): Promise<string> => {
  const result = await Menu.findOrCreate({
    where: {
      restaurant_id: menu.restaurant_id,
      name: menu.name,
    },
    defaults: menu,
  });
  const created = result[1];
  return created ? 'success' : 'duplicated';
};

export const removeMenuById = async (id: number): Promise<string> => {
  const affectedRow = await Menu.destroy({
    where: {
      id,
    },
  });
  return affectedRow === 0 ? 'not exist' : 'completed';
};

export const updateMenuById = async (id: number, menu: Menu): Promise<Menu> => {
  const result = await Menu.update(
    menu,
    {
      where: {
        id,
      },
    },
  );
  const affectedRow = result[0];
  return affectedRow === 0 ? undefined : menu;
};
