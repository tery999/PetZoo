const express = require("express");
const router = express.Router();
const Pet = require("../Models/Pets")
const petsController = require("./petsController");
const userController = require("./userController");

router.use("/Pets", petsController);
router.use("/Users", userController);


module.exports = router;

