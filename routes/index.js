const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
const ejs = require('ejs')

router.get('/', function (req, res) {
  res.send('I Love Hacktiv8!')
});
router.get('/student', function (req, res) {
  res.render('student.ejs', { first_name: null, last_name: null })
});
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.post('/student', urlencodedParser, function (req, res) {
  res.render('student.ejs', req.body)
})
router.get('/teacher', function (req, res) {
  res.render('teacher.ejs')
})

module.exports = router