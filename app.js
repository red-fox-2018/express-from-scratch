'use strict';
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}))

app.set('view engine', 'ejs');

let routes = require('./routes/index');
app.use('/', routes);

let studentRoutes = require('./routes/student');
app.use('/student', studentRoutes);

let teacherRoutes = require('./routes/teacher');
app.use('/teachers', teacherRoutes);

app.listen(3000);