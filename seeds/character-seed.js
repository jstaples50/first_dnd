const { Character } = require("../model");

const characterData = [
  {
    collection_id: 1,
    name: "Jafar",
    class_id: 1,
  },
  {
    collection_id: 1,
    name: "Karakrot",
    class_id: 2,
  },
  {
    collection_id: 1,
    name: "Aria",
    class_id: 3,
  },
  {
    collection_id: 1,
    name: "Menulaus",
    class_id: 4,
  },
  {
    collection_id: 1,
    name: "Namara",
    class_id: 5,
  },
  {
    collection_id: 1,
    name: "Gore",
    class_id: 6,
  },
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
