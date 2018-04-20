/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

const routes = require('express').Router();

routes.get('/', function(req, res) {
   res.render('index.ejs');
});

routes.get('/student', function(req, res) {
   res.render('student-form.ejs');
});

routes.post('/student', function(req, res) {
   res.render('student-data', {
      data: req.body
   });
});

routes.get('/teachers', function(req, res) {
   let dataTeachers = [{
      No: 1,
      first_name: "Andrew",
      last_name: "Wommack",
      gender: "male",
      academic_subject: "Fundanmental of Grace"
   }, {
      No: 2,
      first_name: "Jammy",
      last_name: "Gracies",
      gender: "female",
      academic_subject: "Living of Garce"
   }, {
      No: 3,
      first_name: "Paul",
      last_name: "Milligan",
      gender: "male",
      academic_subject: "Spirit, Soul and Body"
   }, {
      No: 4,
      first_name: "Sharon",
      last_name: "Rich",
      gender: "female",
      academic_subject: "Pray and Worship"
   }, {
      No: 5,
      first_name: "Barry",
      last_name: "Burns",
      gender: "male",
      academic_subject: "Finnancial of Grace"
   }];
   res.render("teacher-data.ejs", {
      dataTeachers
   });
});



module.exports = routes;
