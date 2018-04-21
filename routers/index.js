const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let students = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male'
  }, {
    id: 2,
    firstName: 'Mari',
    lastName: 'Maria',
    gender: 'female'
  }, {
    id: 3,
    firstName: 'Sebas',
    lastName: 'Tian',
    gender: 'male'
  }
]

//HOME PAGE

router.get('/', function (req, res) {
  res.render('index')
})

router.get('/student', function (req, res) {
  res.render('student')
})

router.post('/student', urlencodedParser, function (req, res) {
  let newStudent = req.body
  students.push(newStudent)
  res.render('student')
})


router.get('/teacher', function (req, res) {
  res.render('teacher', {students: students})
})
// router.get('/students', function (req, res) {
//   res.render('')
// })


module.exports = router
