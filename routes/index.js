const routes = require('express').Router();
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const ejs = require('ejs')

routes.get('/student',(req,res)=>{
    res.render('student.ejs',{name:null,school:null});
});

routes.post('/student', urlencodedParser, function (req, res) {
    res.render('student.ejs',req.body)
})

routes.get('/teachers',(req,res)=>{
    res.render('teachers.ejs');
});
routes.get('/',(req,res)=>{
    res.status(200).json('HOME')
})


module.exports = routes;