const express = require('express')
const router = express()

router.get('/teachers',function(req,res){
    let obj = {
        fullname: 'handoko',
        gender: 'male',
        address: 'Jl Kebayoran lama',
        city: 'Jakarta'
    }
    let dataTeachers = []
    for(let i=0;i<5;i++){
        dataTeachers.push(obj)
    }
    res.render('teacher', {data:dataTeachers})
})

module.exports = router