const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    checkoutSingleItem,
    checkoutCart,
} = require('../controllers/order')


router.post('/',authMiddleware, checkoutSingleItem);
router.post('/:cartId', authMiddleware, checkoutCart);

module.exports = router;