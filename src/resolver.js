import users from './DB/user';
import restaurants from './DB/restaurant';
import menues from './DB/menu';


const login = (email, password) => {
  return users.filter((v) => {
    return v.email === email && v.password === password
  })
}

const getRestaurantByCategory = (category) => {
  return restaurants.filter((v) => {
    return v.category === category;
  });
}
const getMenuById = (id) => {
  return menues.filter((v) => {
    return v.restaurant_id === id;
  })
}
const resolvers = {
  Query : {
    login: (obj,{ email, password }) => {
      const result = login(email, password);
      if (result.length === 0) {
        return 'err'
      }
      return result[0];
    },
    users: () => {
      return users;
    },
    restaurants: (obj,{ category }) => {
      if (category) {
        return getRestaurantByCategory(category);
      }
      return restaurants;
    },
  },
  Mutation: {
    register: (obj,{ input }) => {
      const {id, email, password, name, profile, age, birthday, gender} = input;
      if (users.filter(v => v.email === email).length > 0) return 'err';
      users.push({ id, email, password, name, profile, age, birthday, gender })
      return 'success'
    },
  },
  Restaurant: {
    menues: ({ id }) => {
      return getMenuById(id);
    },
  }
};

export default resolvers;
