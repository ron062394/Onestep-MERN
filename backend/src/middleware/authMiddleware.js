const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token.substring(7), process.env.JWT_SECRET);
    console.log(token.substring(7))
    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    console.log(token.substring(7))
    console.log(process.env.JWT_SECRET)
    res.status(401).json({ error: error.message });
  }
};

module.exports = authMiddleware;