const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    addToCart,
    getCart,
    removeFromCart,
    incrementCartItem,
    decrementCartItem,
} = require('../controllers/cart')


router.post('/',authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.put('/:productId',authMiddleware, removeFromCart);
router.put('/increment/:productId/:size',authMiddleware, incrementCartItem);
router.put('/decrement/:productId/:size',authMiddleware, decrementCartItem);


module.exports = router;