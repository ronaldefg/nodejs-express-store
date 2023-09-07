const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const userssRouter = require('./users.router');
const ordersRouter = require('./orders.router');
const customersRouter = require('./customers.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', userssRouter);
  router.use('/customers', customersRouter);
  router.use('/orders', ordersRouter);
}

module.exports = routerApi;
