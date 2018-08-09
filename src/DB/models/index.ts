import Sequelize from 'sequelize';

const sequelize = new Sequelize('delivery_app', 'root', 'Tnrms@@852', {
  host: 'localhost',
  dialect: 'mysql',
});

export const User = sequelize.import('./user');
export const Order = sequelize.import('./order');
export const Restaurant = sequelize.import('./restaurant');
export const Menu = sequelize.import('./menu');
