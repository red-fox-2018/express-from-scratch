const fs = require('fs');
const express = require('express')
const router = express()


router.get('/', function(req, res) {
  res.render('index', {
    title: 'Welcome to Hacktiv8!'
  })
})

router.get('/student', function(req, res) {
  res.render('form')
})

router.post('/student', function(req, res) {
  res.render('studentForm', {
    data: req.body
  })
})

router.get('/teacher', function(req, res) {

  let obj = [{
      fullname: 'Randi Halvarson',
      gender: 'male',
      address: '711-2880 Nulla St',
      city: 'Mississippi'

    },
    {
      fullname: 'Nia Ramadhani',
      gender: 'female',
      address: 'jakarta selatan',
      city: 'jakarta'
    },
    {
      fullname: 'Raisa Adriana',
      gender: 'female',
      address: 'cinere',
      city: 'Depok'
    }
  ]

  res.render('teacher', {
    data: obj
  })
})

module.exports = router
