export interface Restaurant {
  id: number;
  name: string;
  address: string;
  category: string;
  min_price: string;
  detail: string;
  average_rating: number;
}

let restaurants: Restaurant[] = [
  {
    id: 1,
    name: '소떡소떡',
    address: '서울시 강남구',
    category: '일반음식점',
    min_price: '5000',
    detail: '소세지와 떡을 꼬치로 꽂아 팔고 있습니다.',
    average_rating: 3.5,
  },
  {
    id: 2,
    name: '야채마을',
    address: '서울시 노원구',
    category: '배달음식점',
    min_price: '7000',
    detail: '싱싱한 야채를 배달로 팔고 있습니다.',
    average_rating: 2.5,
  },
  {
    id: 3,
    name: '술렁술렁',
    address: '서울시 용산구',
    category: '배달주점',
    min_price: '5000',
    detail: undefined,
    average_rating: 4.5,
  },
];

export const getAllRestaurants = (): Restaurant[] => {
  return restaurants;
};
export const getRestaurantsByCategory = (category: string): Restaurant[] => {
  return restaurants.filter((v: Restaurant): boolean => {
    return v.category === category;
  });
};
export const registerRestaurant = (restaurant: Restaurant): Restaurant => {
  restaurant.id = restaurants.length + 1;
  restaurants.push(restaurant);
  return restaurant;
};
export const removeRestaurantById = (id: number): Restaurant => {
  let removed: Restaurant;
  restaurants = restaurants.filter((v: Restaurant): boolean => {
    if (v.id === id) {
      removed = v;
      return false;
    }
    return true;
  });
  return removed;
};
export const updateRestaurantById = (id: number, restaurant: Restaurant): Restaurant => {
  let isChanged: boolean = false;
  restaurants = restaurants.map((v: Restaurant): Restaurant => {
    if (v.id === id) {
      v = restaurant;
      isChanged = true;
    }
    return v;
  });
  if (isChanged) {
    return restaurant;
  }
  return undefined;
};
