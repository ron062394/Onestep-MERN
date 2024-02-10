const express = require('express');
const router = express.Router();

const {createProduct} = require('../controllers/product')

router.post('/', createProduct);

module.exports = router;