const mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcryptjs')
const User = mongoose.model("User")
const Cart = mongoose.model("Cart")
const router = express.Router()


router.post( "/ecommerce" , (req , res)=>{
    console.log(req.body)
    const { name , cost , itemId , image} = req.body

    const cart = new Cart( {
        name:name ,
        cost:cost ,
        itemId:itemId ,
        image:image
    } )
    cart.save()
    .then(data=> {
        res.json({message:"suxxes"})
        console.log(data)
    })
    .catch(err=>{
        console.log("error:",err)
    })
} )

router.post('/signup' , (req, res)=> {
    const { name , email , password} = req.body
    if( !name || !email || !password ) {
        return res.status(404).json({error : "please enter all the fields"})
    }
    User.findOne( { email : email } )
        .then(savedUser=>{
          if(savedUser) {
              return res.status(404).json({error:"it seems like you already have an account , please Login to continue ."})
          }
          bcrypt.hash(password , 11)
            .then(hashedPassword => {
                const user = new User({
                    name : name ,
                    email : email ,
                    password : hashedPassword
                })
                user.save()
                    .then(user=> {
                        res.json({message:"user saved successfully"})
                    })
                    .catch(err=> {
                        console.log(err)
                    })
            }) .catch(err=> {
                console.log(err)
            })  
        }).catch(err=> {
            console.log(err)
        })
})  

router.post('/login' , (req , res) => {
    const { email , password } = req.body
    if( !email || !password) {
       return res.status(422).json({error:"enter all the fields"})
    }
    User.findOne({email:email})
    .then( savedUser => {
        if(!savedUser){
            return res.status(404).json( {error: "It seems like you dont have an account , to login please sign up . "} )
        }
        bcrypt.compare(password , savedUser.password  )
            .then(doesMatch=> {
                if(!doesMatch) {
                    res.json({error:"please enter the correct email or password ."})
                } else{
                    res.json({message:"successfully signed in"})
                }                
            })
            .catch(err=> {
                console.log(err)
            })
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports= router 