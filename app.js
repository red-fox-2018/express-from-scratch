'user strict'

const express = require('express');
const app = express();
const router = require('./routes');

app.set('view engine', 'ejs');

app.use('/', router);
app.use('/student', router);
app.use('/teachers', router);

app.listen(3000);