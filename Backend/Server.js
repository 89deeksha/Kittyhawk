const dotenv=require('dotenv').config()
const cors = require("cors");
const express= require('express')

const app=express()
const connection = require('./Configue/Connection.js');


const PORT=process.env.PORT || 4000
const router=require('./Routes/userRoutes.js')

const mongoose=require('mongoose')



app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));



app.use(express.json())
app.use(express.urlencoded({ extended: true }));
connection()



//schema

//middleware



// app.get('/',(req,res)=>{
// res.send("hi you are at home")
// })
app.use('/api/user',router)


// app.post('/signup',async(req,res)=>{
//     //extract values from req
//     const {name, lastname,password}=req.body

//     //validation
//     if(!name || !lastname || !password){
//         return res.status(400).send("All fields are required")
//     }
//    try{
// //newuser
// const newUser=new model({
//     name,
//   lastname,
//     password

// })
// await newUser.save()
// res.status(201).send("user created successfully")
// console.log(newUser)
//    }
//    catch(err){
// res.status(500).send("you have err",err)
//    }
// })







app.listen(PORT,()=>{
    console.log("server started at port",PORT)
})