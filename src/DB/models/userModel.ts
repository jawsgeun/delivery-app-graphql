export default (sequelize, DataTypes) => {
  return sequelize.define('user',
  {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    profile_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    join_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    age: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: null,
    },
    birthday: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: '일반',
    },
  },
  {
    timestamps: false,
    tableName: 'user',
  });
};
