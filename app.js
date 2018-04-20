const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
let app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)

app.use('/', routes)

app.listen(3000)
