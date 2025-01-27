"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      full_name: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: "0",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
