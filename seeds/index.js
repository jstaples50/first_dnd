const seedCharCollection = require("./char_collection-seed");
const seedCharacters = require("./character-seed");
const seedClassTypes = require("./class-type-seed");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCharCollection();
  console.log("\n----- COLLECTION SEEDED -----\n");
  await seedClassTypes();
  console.log("\n----- CLASSES SEEDED -----\n");
  await seedCharacters();
  console.log("\n----- CHARACTERS SEEDED -----\n");
};

seedAll();
