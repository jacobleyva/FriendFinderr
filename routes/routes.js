
const { join } = require('path')
module.exports = app => {
    app.get('/', (req,res)=>{
        res.sendFile(join(__dirname,'./public/index.html'))
    })
const matches = require('../app/data/matches.js')

//still have to create exports to matches and grab json and the corrosponding choices.

//need app post and get.

//post my results and get the a match from matches.js
