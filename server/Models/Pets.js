const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
  name: String,
  species: String,
  age: Number,
});

const Pet = mongoose.model("Pet", petsSchema);

module.exports = Pet;
