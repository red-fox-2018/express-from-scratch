const express = require('express');
const app = express.Router()

app.get('/', (req,res)=>{
    res.render('teacher')
})

app.get('/', (req, res) => {
    let teachers = [{
        name: 'Mark',
        subject: 'physics'
      },
      {
        name: 'Phil',
        subject: 'arts'
      },
      {
        name: 'Amanda',
        subject: 'geologi'
      },
      {
        name: 'Keith',
        subject: 'chemistry'
      },
      {
        name: 'Mario',
        subject: 'biologi'
      },
      {
        name: 'Steve',
        subject: 'science'
      },
      {
        name: 'Bill',
        subject: 'math'
      }
    ];
  
    res.render('../views/teacher.ejs', {
      teachers: teachers
    });
  })

module.exports = app;