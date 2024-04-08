const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
    addAddress,

} = require('../controllers/address')


router.post('/addresses', authMiddleware, addAddress);



module.exports = router;