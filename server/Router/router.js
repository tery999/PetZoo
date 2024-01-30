const express = require("express");
const router = express.Router();
const Pet = require("../Models/Pets")
const petsController = require("./petsController");

router.use("/Pets", petsController);


module.exports = router;