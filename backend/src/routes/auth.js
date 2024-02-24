//authRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
    registerUser,
    loginUser,
    getUserInfo,
} = require('../controllers/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route - requires authentication
router.get('/user-info', authMiddleware, getUserInfo);

module.exports = router;
