const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: No token provided' });
  }

  try {
    console.log(process.env.JWT_SECRET)
    const decoded = jwt.verify(token.substring(7), process.env.JWT_SECRET);

    const user = await User.findOne({ _id: decoded.userId });
    req.user = user;
    next();
  } catch (error) {
    console.log(token.substring(7))
    console.log(process.env.JWT_SECRET)
    res.status(401).json({ error: error.message });
  }
};

module.exports = authMiddleware;