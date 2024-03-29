const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    addToCart,
    getCart,
    removeFromCart,
    incrementCartItem,
} = require('../controllers/cart')


router.post('/',authMiddleware, addToCart);
router.get('/', authMiddleware, getCart);
router.put('/:productId',authMiddleware, removeFromCart);
router.put('/:productId/:size',authMiddleware, incrementCartItem);


module.exports = router;