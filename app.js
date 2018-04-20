/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/route');


app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');
app.set('views', './views');

app.use('/', routes);

app.listen(3000, () => {
  console.log(`connected in server port 3000`);
});
