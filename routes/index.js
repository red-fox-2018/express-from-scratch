const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('../views/index.ejs');
})

module.exports = routes;