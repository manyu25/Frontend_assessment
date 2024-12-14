const Wishlist = require('../models/Wishlist');

exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;

  try {
    const wishlistItem = await Wishlist.create({ productId });
    res.status(201).json(wishlistItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
