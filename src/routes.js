const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ShoppingController = require('./controllers/ShoppingController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);

routes.post('/users/:user_id/:product_id',ShoppingController.store);
routes.get('/shopping',ShoppingController.index);



module.exports = routes;