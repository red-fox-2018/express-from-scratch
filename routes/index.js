'use strict'

const express = require('express')

let route = express.Router()

route.get('/', function(req,res){
    res.render('home.ejs')
})

route.get('/student', function(req,res){
    res.send('ini get halaman student')
})

route.post('/student', function(req,res){
    res.send('ini post halaman student')
})

route.get('/teacher', function(req,res){
    res.send('ini get halaman teacher')
})

module.exports = route