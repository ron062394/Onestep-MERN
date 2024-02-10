const Product = require('../models/product.js');

// Create a new product
const createProduct = async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};


module.exports = {
    createProduct,
};