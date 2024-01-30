const express = require("express");
const router = express.Router();
const Pet = require("../Models/Pets")

router.post("/Add", async (req, res) =>{
 const petDetails = req.body;
 try {
    console.log(petDetails);
    await Pet.create(petDetails);
 } catch (e) {
    console.log(e);
 }
 res.status(200).send("Send");
})

router.get("/" , async (req,res) => {
   const allPets = await Pet.find()
   console.log(allPets);
   res.json(allPets);
})

router.get("/:id" , async (req,res) => {
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

router.delete("/:id" , async (req,res) => {
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

router.put("/:id" , async (req,res) => {
   try {
   const petId = req.params.id
   const updateInfo = req.body;
   // new:true - returns the modified value
   const editedPet = await Pet.findByIdAndUpdate(petId , updateInfo, {
      new:true
   })
   res.json(editedPet);
   } catch (err) {
      console.log("THIS IS ERROR", err);
      res.status(400).json(err);
   }
})

module.exports = router;