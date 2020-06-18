'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('../middleware/logger');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const timestamp = require('../middleware/timestamp.js');
const productsRouter = require('../routes/product.js');

const app = express();
app.use(express.json());

app.use(logger);
app.use(timestamp);


app.use('/products', productsRouter);



app.post('/categories', (req, res) => {
  categories.push(req.body);
  res.send(`Category created ${req.body}`);
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/categories/:id', (req, res) => {
  products.forEach(value => {
    if(value.id === request.params.id) {
      console.log(value);
      res.send(value);
    }
  });
});

app.put('/categories/:id', (req, res) => {
  let value = request.params.id;
let newRecord = request.body;
for (let i = 0; i <= categories.length; i++){
  if (categories.id.value === value){
    // let products[i].id.value = newRecord
  }
}
  res.send('PUTTING Categories at ID');
  });

app.delete('/categories/:id', (req, res) => {
  categories.slice(req.params.id -1)
  res.send(`Category Id: ${req.params.id} has been deleted`);
 
});


app.use(error404);
app.use(error500);

module.exports = {
  server: app, 
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Whee! We're up on ${PORT}`)
    }
    )
  }
} 
  