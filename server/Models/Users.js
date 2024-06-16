const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 username: { type: String, unique: true, required: true },
 password: { type: String, required: true },
 profileImg: {type: String , default:"https://i.pinimg.com/474x/4e/3e/e7/4e3ee7d40b5fa8c36a92bfe25b1bf1de.jpg"}
 });

const User = mongoose.model("User", userSchema);

module.exports = User;