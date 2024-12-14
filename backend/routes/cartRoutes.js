const express = require('express');
const { getCartItems } = require('../controllers/cartController');
const router = express.Router();

router.get('/', getCartItems);

module.exports = router;
