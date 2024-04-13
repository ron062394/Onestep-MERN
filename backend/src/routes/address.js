const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    addAddress,
    editAddress,
} = require('../controllers/address')


router.post('/addresses', authMiddleware, addAddress);
router.put('/addresses/:addressId', authMiddleware, editAddress);


module.exports = router;