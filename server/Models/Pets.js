const mongoose = require("mongoose");
const User = require("./Users");


const petsSchema = new mongoose.Schema({
  name: String,
  species: String,
  image: String,
  color: String,
  age: Number,
  gender: String,
  description: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: User }
},  { timestamps: true });

const Pet = mongoose.model("Pet", petsSchema);

module.exports = Pet;
