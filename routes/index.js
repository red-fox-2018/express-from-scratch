
const fs = require('fs');
const express = require('express')
const router = express.Router()

class FileManager {
  static read(dbName) {
    let data = fs.readFileSync(`./db/${dbName}`, 'utf8');
    return JSON.parse(data);
  }
  static justWrite(dbName, listData) {
    fs.writeFile(`./db/${dbName}`, JSON.stringify(listData));
  }
}

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/student', (req, res) => {
  let students = FileManager.read('student.json');
  res.render('student', { students });
});

router.post('/student', (req, res) => {
  let students = FileManager.read('student.json');
  students.push({ firstName: req.body.firstName, lastName: req.body.lastName })
  FileManager.justWrite('student.json', students);

  res.redirect('/student');
});


router.get('/teacher', (req, res) => {
  let teachers = FileManager.read('teacher.json');
  res.render('teacher', { teachers });
});

module.exports = router;
