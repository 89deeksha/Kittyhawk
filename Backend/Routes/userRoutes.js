const express= require('express')
const router=express.Router()
const {addUser,loginuser}=require('../Controllers/userController')
router.post('/signup',addUser)
router.post('/login', loginuser);



module.exports=router
