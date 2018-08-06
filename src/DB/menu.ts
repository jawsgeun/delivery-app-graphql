export interface Menu {
  id: number;
  restaurant_id: number;
  name: string;
  price: string;
}

let menus: Menu[] = [
  {
    id: 1,
    restaurant_id: 1,
    name: '소세지',
    price: '3000',
  },
  {
    id: 2,
    restaurant_id: 1,
    name: '햄버거',
    price: '5000',
  },
  {
    id: 3,
    restaurant_id: 1,
    name: '쫄면',
    price: '4000',
  },
  {
    id: 4,
    restaurant_id: 2,
    name: '라면',
    price: '4000',
  },
  {
    id: 5,
    restaurant_id: 2,
    name: '떡라면',
    price: '3000',
  },
  {
    id: 6,
    restaurant_id: 2,
    name: '떡꼬치',
    price: '2000',
  },
  {
    id: 7,
    restaurant_id: 3,
    name: '닭꼬치',
    price: '2000',
  },
  {
    id: 8,
    restaurant_id: 3,
    name: '돈까스',
    price: '3000',
  },
  {
    id: 9,
    restaurant_id: 3,
    name: '냉면',
    price: '5000',
  },
  {
    id: 10,
    restaurant_id: 3,
    name: '만두라면',
    price: '3000',
  },
];

export const getMenuByRestaurantId = (id: number): Menu[] => {
  return menus.filter((v: Menu) => {
    return v.restaurant_id === id;
  });
};

export const registerMenu = (menu: Menu): Menu => {
  menu.id = menus[menus.length - 1].id + 1;
  menus.push(menu);
  return menu;
};

export const updateMenuById = (id: number, menu: Menu): Menu => {
  let isChanged: boolean = false;
  menus = menus.map((v: Menu): Menu => {
    if (v.id === id) {
      v = menu;
      isChanged = true;
    }
    return v;
  });
  if (isChanged) {
    return menu;
  }
  return undefined;
};
export const removeMenuById = (id: number): Menu => {
  let removed: Menu;
  menus = menus.filter((v: Menu): boolean => {
    if (v.id === id) {
      removed = v;
      return false;
    }
    return true;
  });
  return removed;
};
