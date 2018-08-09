import { Menu, Order, Restaurant, User } from './models/index';

// Menu.findAll({raw: true, limit: 3, offset: 4}).then((results) => {
//   console.log(results);
// });

// Menu.findById('3').then((results) => {
//     console.log(results.dataValues);
// });

Menu
  .findAndCountAll({
    raw: true,
     where: {
        restaurant_id: 2,
     },
  })
  .then((result) => {
    console.log(result.count);
    console.log(result.rows);
  });

// Menu.findOne({
//   where: {price: '5000'},
//   attributes: ['id', ['price', '가격']],
// }).then((menu) => {
//   console.log(menu.dataValues);
//   // project will be the first entry of the Projects table with the title 'aProject' || null
//   // project.title will contain the name of the project
// });
// User.max('age').then((max) => {
//   console.log(max);
// });
