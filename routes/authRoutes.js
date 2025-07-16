// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Register Route (POST)
router.post('/register', register);

// Login Route (POST)
router.post('/login', login);

module.exports = router;
