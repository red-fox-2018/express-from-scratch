const express = require('express');
const routes = express()

routes.set("view engine", "ejs")

routes.get('/', (req, res) => {
  res.render('homepage')
})

routes.post('/', (req, res) => {

})

routes.get('/students', (req, res) => {
  res.render('students')
})

routes.post('/students', (req, res) => {

})

routes.get('/teachers', (req, res) => {
  res.render('teachers')
})

routes.post('/teachers', (req, res) => {

})

module.exports = routes;
