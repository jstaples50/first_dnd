const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ClassCharacter extends Model {}

ClassCharacter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "class_type",
        key: "id",
      },
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "character",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "class_character",
  }
);

module.exports = ClassCharacter;
