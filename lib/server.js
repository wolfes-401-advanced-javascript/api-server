'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('../middleware/logger');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const timestamp = require('../middleware/timestamp.js');
const db = require('../data/db.json');
const categories = [...db.categories];
const products = [...db.products];
const testProducts = [];
const app = express();
app.use(express.json());

app.use(logger);
app.use(timestamp);
// app.use(bodyParser.urlencoded({extended: true}));

app.post('/products', (req, res) => {
  products.push(req.body);
  console.log(req.body);
  res.send('sending products');
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  products.forEach(val => {
    if(val.id === req.params.id) {
      console.log(val);
      res.send(val);
    }
  })
});

app.put('/product/:id', (req, res) => {
  res.send('update product by id');
});

app.delete('/products/:id', (req, res) => {
  products.slice(req.params.id -1)
  res.send(`Product Id: ${req.params.id} has been deleted`);
});

app.post('/categories', (req, res) => {
  res.send('sending categories');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/categories/:id', (req, res) => {
  res.send('getcategories by id');
});

app.put('/product/:id', (req, res) => {
  res.send('updatecategories by id');
});

app.delete('/categories/:id', (req, res) => {
  res.send('deletecategories by id');
});


app.use(error404);
app.use(error500);

module.exports = app;