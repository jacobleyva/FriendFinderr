const express = require('express')
const db = require('./routes/dbroute')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

app.get('/', (req, res) => {
    res.render('index', {})
})
db.connect(_ => app.listen(3000))