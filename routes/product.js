'use strict';

const express = require('express');
const router = express.Router();

router.post('/', postProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductById)


function postProduct(req, res) {
  
}

router.post('/', (req, res) => {
  
  res.send(`Product made ${req.body}`);
});

router.get('/', (req, res) => {
  res.send(products);
});

router.get('/:id', (req, res) => {
  
  res.send(req.body);
});

router.put('/:id', (req, res) => {
  
  res.send('update product by id');
});

router.delete('/:id', (req, res) => {
  
  res.send(`Product Id: ${req.params.id} has been deleted`);
});

module.exports = router;