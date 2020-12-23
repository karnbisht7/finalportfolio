const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema( {
    name : {
        type:String,
        required:true
    } ,
    itemId : {
        type:String,
        required:true
    } ,
    cost : {
        type:Number,
        required:true
    } ,
    image : {
        type:String ,
        required:true
    }
} )

mongoose.model("Cart" , cartSchema)