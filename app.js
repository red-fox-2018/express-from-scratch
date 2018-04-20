const express = require('express')
const app = express()
let ejs = require('ejs')
var bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('home',{user: "NEW STUDENT",title:"Homepage"});
    
})

app.get('/student',function(req,res){
    res.render('student')
})

app.post('/student',function(req,res){
    res.redirect('/')
})

app.get('/teachers',function(req,res){
    res.render('teacher',{name:"Ani", major:"Science"})
})



app.listen(4000)