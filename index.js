'use strict';

require('dotenv').config();
const server = require('./lib/server.js');
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI_PORT, {
  useNewURlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const db = mongoose.connection;
db.on('open', () => {
  console.log('The mongoose is chillin!')
});


server.start(PORT);