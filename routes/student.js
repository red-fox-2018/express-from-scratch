const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    res.render('add-student.ejs', {title: 'Student Add Form'})
})

module.exports = routes