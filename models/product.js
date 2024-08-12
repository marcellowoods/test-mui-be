const Sequelize = require('sequelize');

const sequelize = require('../utils/db');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  rating: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;