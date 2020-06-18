'use strict';

const express = require('express');
const router = express.Router();

const Categories = require('../lib/models/categories/categories-collection.js');

const Category = new Categories();

router.post('/', postCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategoryById);
router.delete('/:id', deleteCategoryById);

async function postCategory(req, res) {
  const results = await Category.create(req.body);
  res.send('Product saved!')
}

async function getCategories(req, res) {
  const results = await Category.read();
  res.send(results);
}

async function getCategoryById(req, res) {
  const results = await Category.get(req.params.id);
  res.send(results);
}

async function updateCategoryById(req, res) {
  const results = await Category.update(req.params.id, req.body);
  res.send(`Updated ${req.params.id}`);
}

async function deleteCategoryById(req, res) {
  const results = await Category.delete(req.params.id);
  res.send(`Product ID: ${req.params.id} has been deleted`);
}

module.exports = router;