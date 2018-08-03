import { IResolvers } from '../node_modules/graphql-tools';
import * as m from './DB/menu';
import * as r from './DB/restaurant';
import * as u from './DB/user';

const resolvers: IResolvers = {
  Query: {
    login: (obj, { email, password }) => u.login(email, password),
    users: (): u.User[] => u.getAllUsers(),
    restaurants: (obj, { category }): r.Restaurant[] => {
      if (category) {
        return r.getRestaurantsByCategory(category);
      }
      return r.getAllRestaurants();
    },
    menuByRestaurant: (obj, { id }) => m.getMenuByRestaurantId(id),
  },
  Mutation: {
    registerUser: (obj, { userInput }) => u.registerUser(userInput),
    removeUser: (obj, { id }) => u.removeUserById(id),
    updateUserInfo: (obj, { id, userInput }) => u.updateUserById(id, userInput),
    registerRestaurant: (obj, { restaurantInput }) => r.registerRestaurant(restaurantInput),
    removeRestaurant: (obj, { id }) => r.removeRestaurantById(id),
    updateRestaurantInfo: (obj, { id, restaurantInput }) => r.updateRestaurantById(id, restaurantInput),
    registerMenu: (obj, { menuInput }) => m.registerMenu(menuInput),
    updateMenuInfo: (obj, { id, menuInput }) => m.updateMenuById(id, menuInput),
    removeMenu: (obj, { id }) => m.removeMenuById(id),
  },
  Restaurant: {
    menus: ({ id }): m.Menu[] => m.getMenuByRestaurantId(id),
  },
};

export default resolvers;