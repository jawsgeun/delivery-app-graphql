export default (sequelize, DataTypes) => {
  return sequelize.define('menu',
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      restaurant_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        references: {
          model: 'restaurant',
          key: 'id',
        },
      },
      name: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: 'menu',
    });
};
