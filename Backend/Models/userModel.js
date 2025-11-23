const mongoose=require('mongoose')

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
//modal
const model=mongoose.model('kittycollection',schema)
module.exports=model