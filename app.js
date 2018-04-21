const app = require('express')()
const routes = require('./routes')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
app.use('/', routes)
app.set('view engine', 'ejs')


app.listen(3000)
