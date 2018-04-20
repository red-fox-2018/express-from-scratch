const express = require('express');
const routes = require('./routes');
// const views = require('./views');
let app = express();

app.set('view engine', 'ejs');
//  Connect all our routes to our application

app.use('/', routes);
app.use('/student', routes);

// Turn on that server!
app.listen(3000, () => {
  console.log('App listening on port 3000');
});