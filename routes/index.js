const routes = require('express').Router();
const bodyParser = require('body-parser');

routes.get('/', (req, res) => {
  res.render('index');
});

routes.get('/student',(req,res) => {
    res.render('formStudent');
});

routes.post('/student', function (req, res) {
    res.render('contact');
    console.log(req.body);
});


module.exports = routes;
