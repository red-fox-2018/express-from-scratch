const express = require("express")
let app = express()
var router = express.Router()



router.get('/',function(req,res) {
	res.render('home')
})

router.get('/student',function(req,res) {
	res.render("student")
})

router.post('/student',function(req,res) {
	res.send(`terima kasih ${req.body.firstName} ${req.body.lastName} telah mendaftar `);
})

router.get('/teachers',function(req,res) {
	res.render("teacher")
})


module.exports=router

