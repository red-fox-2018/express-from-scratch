const express = require('express')
const app = express()
const index = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teachers')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.use('/',index)
app.use('/',student)
app.use('/',teacher)

app.listen(3000)


