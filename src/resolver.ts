import { IResolvers } from '../node_modules/graphql-tools';
import { Menu, menus } from './DB/menu';
import { Restaurant, restaurants } from './DB/restaurant';
import { User, users } from './DB/user';

const login = (email: string, password: string): User[] => {
  return users.filter((v: User) => {
    return v.email === email && v.password === password;
  });
};

const getRestaurantByCategory = (category: string): Restaurant[] => {
  return restaurants.filter((v: Restaurant) => {
    return v.category === category;
  });
};

const getMenuById = (id: number): Menu[] => {
  return menus.filter((v: Menu) => {
    return v.restaurant_id === id;
  });
};
const resolvers: IResolvers = {
  Query: {
    login: (obj, { email, password }) => {
      const result: User[] = login(email, password);
      if (result.length === 0) {
        return 'err';
      }
      return result[0];
    },
    users: () => {
      return users;
    },
    restaurants: (obj, { category }) => {
      if (category) {
        return getRestaurantByCategory(category);
      }
      return restaurants;
    },
  },
  Mutation: {
    register: (obj, { input }) => {
      const { id, email, password, name, profile_url, join_date, age, birthday, gender, grade } = input;
      if (users.filter((v: User) => v.email === email).length > 0) {
        return 'err';
      }
      users.push({ id, email, password, name, profile_url, join_date, age, birthday, gender, grade });
      return 'success';
    },
  },
  Restaurant: {
    menus: ({ id }) => {
      return getMenuById(id);
    },
  },
};

export default resolvers;
