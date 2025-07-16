const express = require('express');
const router = express.Router();
const { addToCart, getCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, addToCart);   // Add product to cart
router.get('/', protect, getCart);      // View cart

module.exports = router;
