const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    checkoutSingleItem,
    checkoutCart,
    getAllOrders
} = require('../controllers/order')


router.post('/',authMiddleware, checkoutSingleItem);
router.post('/:cartId', authMiddleware, checkoutCart);
router.get('/orders', getAllOrders);

module.exports = router;