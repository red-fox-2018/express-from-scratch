'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine','ejs');


let routeIndex = require('./routes/index')
app.use('/', routeIndex)

let routeStudent = require('./routes/student')
app.use('/student', routeStudent)

let routeTeacher = require('./routes/teacher')
app.use('/teacher', routeTeacher)

app.listen(3000)