const routes = require('express').Router()

routes.get('/', (req, res, next) => {
  res.render('school')
})

routes.get('/student', (req, res, next) => {
  res.render('form_student')
})

routes.get('/teacher', (req, res, next) => {
  var arr = [{name: 'Sam', age: '50', subject: 'Science'}, {name: 'Tim', age: '60', subject: 'Chemistry'}, {name: 'Alexa', age: '35', subject: 'Physics'}]
  res.render('teachers', {teacher: arr})
})

module.exports = routes
