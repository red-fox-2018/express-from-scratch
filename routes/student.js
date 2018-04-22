const express = require('express');
const app = express.Router()

app.get('/', (req,res)=>{
    res.render('student')
})

app.post('/', (req, res) => {
    let info = `${req.body.name}<br>${req.body.email}<br>${req.body.hoby}`
    console.log(info);
  })

module.exports = app;