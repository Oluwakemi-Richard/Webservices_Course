const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Ajibike Richard');
});

module.exports = routes;