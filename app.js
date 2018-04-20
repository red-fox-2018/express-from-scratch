const express = require('express')
let app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
var routes = require('./routes');
app.use('/', routes);

app.listen(3000)
