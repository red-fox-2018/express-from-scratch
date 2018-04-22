const express = require('express')
const app = express()


app.set('view engine', 'ejs');

let homeRoute = require('./routes/home')
app.use('/', homeRoute);

let studentRoute = require('./routes/student')
app.use('/student', studentRoute)

let teacherRoute = require('./routes/teacher')
app.use('/teacher', teacherRoute)

app.listen(3000, function(){
    console.log('Listening to port 3000');
})