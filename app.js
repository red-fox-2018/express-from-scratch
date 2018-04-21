const express = require('express');
const app = express()
const routes = require('./routes');
// const student = require('./routes/student');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let ejs = require('ejs')
app.set('view engine','ejs')

app.set('views','/views')

app.use('/',routes);

app.listen(3000)
