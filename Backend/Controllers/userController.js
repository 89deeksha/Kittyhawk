const model=require('../Models/userModel')
const bcrypt = require("bcrypt");



const addUser=async(req,res)=>{
   
    //extract values from req
    const {name, lastname,password}=req.body

    //validation
    if(!name || !lastname || !password){
        return res.status(400).send("All fields are required")
    }
   try{
//newuser
const hashedPassword = await bcrypt.hash(password, 10);
const newUser=new model({
    name,
  lastname,
    password: hashedPassword

})
await newUser.save()
res.status(201).send("user created successfully")
console.log(newUser)
   }
   catch(err){
res.status(500).send("you have err",err)
   }
}

module.exports={addUser}