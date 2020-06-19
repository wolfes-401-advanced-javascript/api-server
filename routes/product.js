'use strict';

const express = require('express');
const router = express.Router();

const Products = require('../lib/models/products/products-collection.js');

const Product = new Products();

router.post('/', postProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);


async function postProduct(req, res) {
  const results = await Product.create(req.body);
  res.send('Product saved!')
}

async function getProducts(req, res) {
  const results = await Product.read();
  res.send(results);
}

async function getProductById(req, res) {
  const results = await Product.read(req.params.id);
  res.send(results);
}

async function updateProductById(req, res) {
  const results = await Product.update(req.params.id, req.body);
  res.send(`Updated ${req.params.id}`);
}

async function deleteProductById(req, res) {
  const results = await Product.delete(req.params.id);
  res.send(`Product ID: ${req.params.id} has been deleted`);
}


module.exports = router;