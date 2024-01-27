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

router.get("/Pets" , async (req,res) => {
   const allPets = await Pet.find()
   console.log(allPets);
   res.json(allPets);
})

router.get("/Pets/:id" , async (req,res) => {
   try {
   const petId = req.params.id
   const onePet = await Pet.findById(petId)
   console.log("THIS IS SINGLE PET" , onePet);
   res.json(onePet);
   } catch (err) {
      console.log("THIS IS ERROR", err);
      res.status(400).json(err);
   }
})

router.delete("/Pets/:id" , async (req,res) => {
   try {
   const petId = req.params.id
   console.log("THIS IS THE PET ID", petId);
   const deletedPet = await Pet.findByIdAndDelete(petId);
   res.json({message: "Delete succesfully"});
   } catch (err) {
      console.log("THIS IS ERROR", err);
      res.status(400).json(err);
   }
})

module.exports = router;