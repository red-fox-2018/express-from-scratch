
const routes = require('express').Router()

routes.get('/',(req,res)=>{
  res.render('home.ejs')
})

routes.get('/students',function(req,res){
  res.render('student.ejs')
})

routes.post('/student', function(req, res){
  let student = `name : ${req.body.studentName} '\n'gender : ${req.body.gender} '\n'birthdate : ${req.body.birthdate} '\n' registered successfuly`
  res.send(student)
})

routes.get('/teachers',function(req,res){
  let dataTeachers = [{
    No:1,
    first_name : "Udin",
    last_name : "Jampang",
    gender : "male",
    academic_subject: "Pencak Silat"
  },{
    No:2,
    first_name : "Royce",
    last_name : "Gracie",
    gender : "male",
    academic_subject: "Brazilian Jiu-Jitsu"
  },{
    No:3,
    first_name : "Ronda",
    last_name : "Rousey",
    gender : "female",
    academic_subject: "Judo"
  },{
    No:4,
    first_name : "Conor",
    last_name : "McGregor",
    gender : "male",
    academic_subject: "Boxing"
  },{
    No:5,
    first_name : "Dwayne",
    last_name : "johnson",
    gender : "male",
    academic_subject: "Wrestling"
  }]
  res.render("teacher.ejs",{dataTeachers})
})

module.exports = routes;
