const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./Router/router")
const app = express();
const PORT = 3030;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen (PORT , ()=> console.log("Server running on" , PORT));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/PetZoo');
    console.log("DB connected")
}

main();