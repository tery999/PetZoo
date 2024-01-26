const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
  name: String,
  species: String,
  image: String,
  color: String,
  age: Number,
  gender: String,
  description: String
});

const Pet = mongoose.model("Pet", petsSchema);

module.exports = Pet;
