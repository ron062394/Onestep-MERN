const express = require('express');
const router = express.Router();

const {
    addToCart,
    getCart,
    removeFromCart
} = require('../controllers/cart')


router.post('/', addToCart);
router.get('/', getCart);
router.put('/:productId', removeFromCart);


module.exports = router;