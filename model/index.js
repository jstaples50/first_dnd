const Char_Collection = require("./char_collection");
const Character = require("./character");
const Class_Type = require("./class-type");
const ClassCharacter = require("./class-character");

Char_Collection.hasMany(Character, {
  foreignKey: "collection_id",
});

Character.belongsTo(Char_Collection, {
  foreignKey: "collection_id",
});

Character.belongsTo(Class_Type);

Class_Type.hasMany(Character);

module.exports = { Char_Collection, Character, Class_Type, ClassCharacter };
