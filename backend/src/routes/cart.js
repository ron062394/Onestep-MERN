const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    addToCart,
    getCart,
    removeFromCart
} = require('../controllers/cart')


router.post('/',authMiddleware, addToCart);
router.get('/', getCart);
router.put('/:productId',authMiddleware, removeFromCart);


module.exports = router;