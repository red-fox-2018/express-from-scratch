const express = require('express');
const app = express();
const routes = require('./routes/index')

app.set('view engine', 'ejs')

app.use('/',routes)
app.use('/student',routes)
app.use('/teachers',routes)

app.listen(3000)

module.exports = app

