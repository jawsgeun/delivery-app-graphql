export default (sequelize, DataTypes) => {
  return sequelize.define('order',
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      restaurant_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        references: {
          model: 'restaurant',
          key: 'id',
        },
      },
      menu_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        references: {
          model: 'menu',
          key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
      tableName: 'order',
    });
};
