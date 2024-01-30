const express = require('express');
const router = express.Router();
const User = require("../Models/Users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/Register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username, password:encryptedPassword});
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});


module.exports = router;