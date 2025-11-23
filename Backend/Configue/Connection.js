const mongoose=require('mongoose')
const env=require('dotenv')

env.config()

const connection=async()=>{
await mongoose.connect(process.env.MONGO_SH)
.then(()=>{
    console.log("mongodb connected")
})
}

module.exports=connection