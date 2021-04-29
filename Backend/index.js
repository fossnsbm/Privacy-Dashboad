const express = require('express')
var cors = require('cors')
app = express()
app.use(cors())

app.use('/', require('./routes/check'))

app.listen(4000, ()=>{
    console.log("Server start")
})