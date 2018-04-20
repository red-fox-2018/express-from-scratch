const express = require('express')
const router = express()

router.get('/student',function(req,res){
    res.render('form')
})

router.post('/student',function(req,res){
    res.render('result',req.body)
})

module.exports = router