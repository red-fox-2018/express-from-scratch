const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('../views/student.ejs');
})

routes.post('/', (req, res) => {
  let info = `${req.body.name}<br>${req.body.email}<br>${req.body.hoby}`
  res.send(info)
})

module.exports = routes;