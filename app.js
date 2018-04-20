var app = require('express')()
var routes = require('./routes');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3000, ()=>{
  console.log('server connected');
})
