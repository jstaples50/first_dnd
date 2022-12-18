const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Char_Collection extends Model {}

Char_Collection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "char_collection",
  }
);

module.exports = Char_Collection;
