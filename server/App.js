const express = require('express')
const app = express()
const mongoose = require("mongoose")
const {MONGOURI} = require('./keys')
const PORT = 5000


mongoose.connect(MONGOURI , {
                  useNewUrlParser : true ,
                  useUnifiedTopology : true }   )
mongoose.connection.on('connected' , ()=> {
    console.log("mongoDB in the house baeebayyyyy!!!")
})
mongoose.connection.on('error' , ()=> {
    console.log("some niggas trynna block mongoDB from the party bro , gotta do somethin!! ")
})


require('./models/user')
require('./models/cart')

app.use(express.json())
app.use(require('./routes/auth'))




app.listen(PORT , ()=> console.log("yeah we are up and running baby !"))