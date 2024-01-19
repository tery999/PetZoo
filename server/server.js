const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Router/router")
const app = express();
const PORT = 3030;

app.use(routes);
console.log("asd");
app.listen (PORT , ()=> console.log("Server running on" , PORT));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/PetZoo');
    console.log("DB connected")
}

main();