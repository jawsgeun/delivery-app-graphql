import Sequelize from 'sequelize';

const sequelize = new Sequelize('delivery_app', 'root', 'Tnrms@@852', {
  host: 'localhost',
  dialect: 'mysql',
});

export const User = sequelize.import('./userModel');
export const Order = sequelize.import('./orderModel');
export const Restaurant = sequelize.import('./restaurantModel');
export const Menu = sequelize.import('./menuModel');
