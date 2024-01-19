const express = require("express");
const router = express.Router();
const Pet = require("../Models/Pets")

router.post("/Pets/Add", async (req, res) =>{
 const petDetails = req.body;
 try {
    console.log(petDetails);
    await Pet.create(petDetails);
 } catch (e) {
    console.log(e);
 }
 res.status(200).send("Send");
})

module.exports = router;