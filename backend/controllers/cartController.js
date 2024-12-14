const Cart = require('../models/Cart');

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
