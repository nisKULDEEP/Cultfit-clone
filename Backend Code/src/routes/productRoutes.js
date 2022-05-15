const express = require('express');

const app = express();

const middleware = require('../Middleware/middleware');
const {
  allProducts,
  uploadProducts,
  updateProducts,
  deleteProduct,
  getProduct,
} = require('../controllers/product.controller');

app.post('/upload', middleware.isAdmin, uploadProducts);
app.patch('/:id', updateProducts);
app.get('/:id', getProduct);
app.get('/', allProducts);
app.delete('/:id', deleteProduct);

module.exports = app;
