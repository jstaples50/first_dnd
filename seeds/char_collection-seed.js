const { Char_Collection } = require("../model");

const charCollectionData = {};

const seedCharCollection = () => Char_Collection.create(charCollectionData);

module.exports = seedCharCollection;
