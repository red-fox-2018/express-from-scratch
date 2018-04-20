const routes = require('express').Router()
const bodyParser = require('body-parser');

routes.use(bodyParser.urlencoded({extended: false}))
routes.get('/', function(req,res){

    res.render('../view/index.ejs')
})

routes.get('/student',function(req,res){

    res.render('../view/add-student.ejs')
})

routes.post('/student',function(req,res){

    res.render('../view/student.ejs', {data: req.body})
})

routes.get('/teacher',function(req,res){
    let teachers = [{
              name: 'John',
              subject: 'physics'
            },
            {
              name: 'Doe',
              subject: 'arts'
            },
            {
              name: 'Lina',
              subject: 'geologi'
            },
            {
              name: 'Goldenberg',
              subject: 'chemistry'
            },
            {
              name: 'Luigi',
              subject: 'biologi'
            }]
            
    res.render('../view/teacher.ejs', { teachers })
})

routes.ge

module.exports = routes