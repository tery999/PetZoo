const express = require("express");
const router = express.Router();
const Pet = require("../Models/Pets");
const AuthMiddleware = require("../AuthMiddleware");

router.post("*", AuthMiddleware);
router.put("*", AuthMiddleware);
router.delete("*", AuthMiddleware);

router.post("/Add", async (req, res) => {
   const petDetails = req.body;
   try {
      console.log(petDetails);
      await Pet.create(petDetails);
   } catch (e) {
      console.log(e);
   }
   res.status(200).send("Send");
})

router.get("/", async (req, res) => {
   const allPets = await Pet.find()
   console.log(allPets);
   res.json(allPets);
})

router.get("/ByDate", async (req, res) => {
   const allPets = await Pet.find().sort({ createdAt: -1 })
   console.log(allPets);
   res.json(allPets);
})

router.get("/:id", async (req, res) => {
   try {
      const petId = req.params.id
      const onePet = await Pet.findById(petId)
      // if (!onePet) {
      //    return res.status(404).json({error: "Pet doesnt exist"});
      // }
      res.json(onePet);
   } catch (err) {
      console.log("THIS IS ERROR", err);
      res.status(400).json(err);
   }
})

router.delete("/:id", async (req, res) => {
   try {
      const petId = req.params.id
      console.log("THIS IS THE PET ID", petId);
      const deletedPet = await Pet.findByIdAndDelete(petId);
      res.json({ message: "Delete succesfully" });
   } catch (err) {
      console.log("THIS IS ERROR", err);
      res.status(400).json(err);
   }
})

router.put("/:id", async (req, res) => {
   try {
      const petId = req.params.id
      const updateInfo = req.body;
      // new:true - returns the modified value
      const editedPet = await Pet.findByIdAndUpdate(petId, updateInfo, {
         new: true
      })
      res.json(editedPet);
   } catch (err) {
      console.log("THIS IS ERROR", err);
      res.status(400).json(err);
   }
})

router.put("/:id/Likes", async (req, res) => {
   try {
      const petId = req.params.id;
      const body = req.body;
      const userId = body.userId;
      const userLiked = await Pet.findById(petId);
      if (userLiked.likes.includes(userId)) {
         console.log("USER ALREADY EXISTS");
        const returnedPet = await Pet.findByIdAndUpdate(petId, {
            $pull: { "likes": userId } ,
            new: true
         })
         console.log("RETURNED PET " , returnedPet);
         console.log("RETURNED PET LIKES" , returnedPet.likes);
         res.json( returnedPet.likes);
      } else {
         console.log("USER DOESNT EXIST");
         const returnedPet = await Pet.findByIdAndUpdate(petId, {
            "$push": { "likes": userId } ,
            new: true
         })
         res.json( returnedPet.likes);
      }
   } catch (err) {
      console.log("THIS IS ERROR", err);
      res.status(400).json(err);
   }
})

router.post("/Comments/:id/Add", async (req, res) => {
   console.log("COMMENTS ID POST FIRED");
   try {
      const petId = req.params.id;
      const {ownerId, info, username} = req.body;
      commentInfo = {
         ownerId:ownerId,
         info:info,
         username:username
      }
      console.log("COMMENTS INFO", commentInfo)
      updatedPet = await Pet.findByIdAndUpdate(petId , { $push: { comments: commentInfo } , new:true });
      res.json(updatedPet);
   } catch (err) {
      res.status(400).json(err);
   }
});

module.exports = router;