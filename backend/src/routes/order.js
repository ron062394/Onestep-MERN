const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    createOrder,
    checkoutCart,
} = require('../controllers/order')


router.post('/',authMiddleware, createOrder);
router.post('/:cartId', authMiddleware, checkoutCart);

module.exports = router;