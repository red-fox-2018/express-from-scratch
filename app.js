'use strict'
const express = require('express');
const router = require('./routers');
const bodyParser = require('body-parser');


let app = express();

//set view engine
app.set('view engine', 'ejs')

app.use('/', router)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('masuk 3000');
})
