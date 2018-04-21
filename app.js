const express = require("express")
let app = express()
const routes = require("./routes")
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.set('view engine','ejs')

app.use('/',routes)

// app.get('/',function(req,res) {
// 	res.send("I love Hacktiv8asd9!")
// })

app.listen(3008)