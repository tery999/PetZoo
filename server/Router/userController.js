const express = require('express');
const router = express.Router();
const User = require("../Models/Users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthMiddleware = require('../AuthMiddleware');

router.put("*", AuthMiddleware);

router.post('/Register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const userExists = await User.findOne({ username });
        if (userExists) {
           return res.status(409).json({message: "Username already in use"})
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: encryptedPassword });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username);
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'User doesnt exist' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid login info' });
        }
        const token = jwt.sign({ userId: user._id, username: username }, 'your-secret-key', {
            expiresIn: '1h',
        });
        res.status(200).json({ token, userId: user._id, username: username });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

router.get('/profileInfo/:id', async(req, res) => {
    try {
        const userId = req.params.id;
        console.log("TESTING PROFILE INFO")
        const userInfo = await User.findById(userId).select('username profileImg');
        console.log("USER INFO IS");
        console.log(userInfo)
        res.json(userInfo);
    } catch (error) {
        res.status(500).json({error: "Server error"})
    }
})

router.put('/profileInfo/:id', async(req, res) => {
    try {
        const userId = req.params.id;
        const {updatedImg} = req.body;
        console.log("UPDATING IMAGE INFO IN SERVER", updatedImg)
        const userInfo = await User.findByIdAndUpdate( userId, {profileImg: updatedImg} , {  new: true })
        res.json(userInfo);
    } catch (error) {
        res.status(500).json({error: "Server error"})
    }
})




module.exports = router;