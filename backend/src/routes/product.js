const express = require('express');
const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
} = require('../controllers/product')

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);

module.exports = router;