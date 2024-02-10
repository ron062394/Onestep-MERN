const express = require('express');
const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProduct,
} = require('../controllers/product')

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProduct);

module.exports = router;