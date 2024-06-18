const mongoose = require("mongoose");
const User = require("./Users");

const commentSchema = new mongoose.Schema( {
  ownerId: { type:mongoose.Schema.Types.ObjectId, ref:User},
  info: String,
  username: String
})


const petsSchema = new mongoose.Schema({
  name: String,
  species: String,
  image: String,
  color: String,
  age: Number,
  gender: String,
  description: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: User },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: User }],
  comments: [commentSchema]
}, 
{ timestamps: true });

const Pet = mongoose.model("Pet", petsSchema);

module.exports = Pet;
