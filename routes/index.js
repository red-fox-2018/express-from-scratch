const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('index');
});

routes.get('/student',(req,res) => {
    res.render('formStudent');
});

routes.post('/student',(req,res) => {
    res.render('dataStudent',{data: req.body});
})

const teachers = [
    {
      name: "A",
      lvlKiller: 'Naga'
    },
    {
      name: "B",
      lvlKiller: "Dewa"
    },
    {
      name: "C",
      lvlKiller: "Harimau"
    },
    {
      name: "D",
      lvlKiller: "Iblis"
    },
    {
      name: "E",
      lvlKiller: "Bencana"
    }
  ];

routes.get('/teacher',(req, res) => {
    res.render('dataTeacher', {teachers})
})

module.exports = routes;
