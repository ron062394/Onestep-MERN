const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    addToCart,
    getCart,
    removeCartItem,
    incrementCartItem,
    decrementCartItem,
} = require('../controllers/cart')


router.post('/',authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.put('/remove/:productId/:size',authMiddleware, removeCartItem);
router.put('/increment/:productId/:size',authMiddleware, incrementCartItem);
router.put('/decrement/:productId/:size',authMiddleware, decrementCartItem);


module.exports = router;