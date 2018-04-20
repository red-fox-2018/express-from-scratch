const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    res.send("Teacher Page")
})

module.exports = routes