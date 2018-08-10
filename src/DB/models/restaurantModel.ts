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
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      min_price: {
        type: DataTypes.STRING(30),
        allowNull: false,
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
