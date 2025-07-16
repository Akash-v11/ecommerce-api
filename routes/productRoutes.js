const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/', protect, adminOnly, createProduct);
router.get('/', getProducts);

module.exports = router;

// controllers/productController.js

const Product = require('../models/Product');

// @route GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

router.get('/', getProducts);
