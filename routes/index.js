const express = require('express')
const router = express()

router.get('/',function(req,res){
    res.render('index', {title: 'Campus Profile', desc: 'Welcome to Hacktiv8'})
})

module.exports = router