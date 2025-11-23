const express= require('express')
const app=express()
const connection = require('./Configue/Connection');
const PORT=process.env.PORT || 4000

const mongoose=require('mongoose')
const dotenv=require('dotenv').config()




connection()



//schema

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
res.send("hi you are at home")
})


app.post('/signup',async(req,res)=>{
    //extract values from req
    const {name, lastname,password}=req.body

    //validation
    if(!name || !lastname || !password){
        return res.status(400).send("All fields are required")
    }
   try{
//newuser
const newUser=new model({
    name,
  lastname,
    password

})
await newUser.save()
res.status(201).send("user created successfully")
console.log(newUser)
   }
   catch(err){
res.status(500).send("you have err",err)
   }
})







app.listen(PORT,()=>{
    console.log("server started at port",PORT)
})