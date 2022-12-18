const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Class_Type extends Model {}

Class_Type.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "class_type",
  }
);

module.exports = Class_Type;
