const model=require('../Models/userModel')
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')

//signup

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

//signin
const loginuser=async(req,res)=>{
    const {name, password}=req.body
    if(!name || !password){
        return res.status(400).send("All fields required")
    }
    try{
const user=await model.findOne({name})
if(!user ){
    return res.status(404).send("user Email not found")
}
const isMatch=await bcrypt.compare(password, user.password)
if(!isMatch){
    return res.status(404).send("Invalid credential")
}

//generate token
const token=jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
)
res.status(200).json({
    message:"login user successfully",
    token
})
    }catch(err){
 res.status(500).send("Something went wrong")
    }

}



module.exports={addUser, loginuser}