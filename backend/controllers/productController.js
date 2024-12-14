const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  const { search } = req.query;

  try {
    const products = await Product.findAll({
      where: search ? { title: { [Op.iLike]: `%${search}%` } } : {},
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
