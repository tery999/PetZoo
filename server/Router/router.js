const express = require("express");
const router = express.Router();

router.post("/Pets/Add", async (req, res) =>{
    debugger;
 const petDetails = req.body;
 console.log(petDetails);
 res.send("Send")
})

module.exports = router;