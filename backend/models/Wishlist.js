const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Wishlist = sequelize.define('Wishlist', {
  productId: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: false });

module.exports = Wishlist;
