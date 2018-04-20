'use strict'

const express = require('express')

let app = express()

// app.get('/', function(req,res){
//     res.send("I love Hacktiv8!")
// })

let routes = require('./routes')
app.use('/', routes)

app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})
