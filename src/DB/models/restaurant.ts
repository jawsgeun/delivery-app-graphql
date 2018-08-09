export default (sequelize, DataTypes) => {
  return sequelize.define('restaurant',
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      address: {
        type: DataTypes.TEXT,
      },
      category: {
        type: DataTypes.STRING(50),
      },
      min_price: {
        type: DataTypes.STRING(30),
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      average_rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      tableName: 'restaurant',
    });
};
