'use strict';

module.exports = (req, res) => {
  console.log('__ERROR!__: Cannot ' + req.method + ' ' + req.path);
  res.status(404).send('Cannot ' + req.method + ' ' + req.path);
}