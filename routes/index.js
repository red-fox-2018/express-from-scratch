const routes = require('express').Router()

routes.get('/', function(req, res){
  res.render('home')
})

routes.get('/student', function(req, res){
  res.render('form_student')
})

routes.post('/student', function(req, res){
  res.render('student', {student : req.body})
})
const teachers = [
  {
    name: "Teacher 1",
    age: 40
  },
  {
    name: "Teacher 2",
    age: 20
  },
  {
    name: "Teacher 3",
    age: 30
  },
  {
    name: "Teacher 4",
    age: 50
  },
  {
    name: "Teacher 5",
    age: 60
  }
];

routes.get('/teacher', function(req, res){
  res.render('teacher', {teachers : teachers})
})

module.exports = routes;
