const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Product = require('../models/Product');
const Shopping = require('../models/Shopping');

const connection = new Sequelize(dbConfig);

Shopping.init(connection);
Product.init(connection);
User.init(connection);

Shopping.associate(connection.models);

module.exports = connection;