
const fs = require('fs');
const express = require('express')
const router = express.Router()

let studentData = fs.readFileSync('./db/student.json');
let students = JSON.parse(studentData);
let teacherData = fs.readFileSync('./db/teacher.json');
let teachers = JSON.parse(teacherData);

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/student', (req, res) => {
  // res.send(JSON.parse(studentData));
  res.render('student', { students });
});

// router.post('/student', (req, res) => {
//   res.render('student');
// });

router.get('/teacher', (req, res) => {
  res.render('teacher', { teachers });
});

module.exports = router;
