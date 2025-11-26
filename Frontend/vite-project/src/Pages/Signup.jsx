import React, { useState } from 'react'
import axios from "axios";

function Signup() {

  const [credential, setCredential]=useState(true)

const[formData, setFormData]=useState({
  name:"",
  lastname:"",
  password:""
})


  const handleSubmit=async(e)=>{
e.preventDefault()
if(!formData || !formData.name || !formData.lastname || !formData.password){
    alert("All fields are required")
  }
console.log(formData)

try{
const res=await axios.post('http://localhost:8000/api/user/signup',{
  name:formData.name,
  lastname:formData.lastname,
  password:formData.password
})
console.log(res.data)
alert("Signup Successful!");
}catch(error){
console.error(error);
  alert("Signup Failed!");
}


setFormData({
      name: "",
      lastname: "",
      password: ""
    });
  }
  
  return (
   <div className="min-h-screen flex items-center justify-center">
      <div className="h-auto w-[400px] border p-6 bg-white rounded-lg shadow-lg">
        <h1 className='text-center text-2xl font-semibold'>Signup</h1>
        <div className='flex gap-2'>
          <button onClick={()=>setCredential(true)} className={`${credential? "bg-blue-500":""} border rounded-sm py-1 px-5`}>Signup</button>
          <button onClick={()=>setCredential(false)}  className={`${!credential? "bg-blue-500":""} border rounded-sm py-1 px-5`}>Signin</button>
        </div>
         
      <form onSubmit={handleSubmit}>
        {credential?
        <>
              <label className='font-semibold'>Name:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3' type="text" placeholder='Enter name ' value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />

              <label className='font-semibold'>lastname:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3' type="text" placeholder='Enter email' value={formData.lastname} onChange={(e)=>setFormData({...formData,lastname:e.target.value})}/>

              <label className='font-semibold'>Password:</label>
              <input className='border rounded-sm py-1 px-3 w-full' type="password" placeholder='Enter password' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} />
              <button type='submit' className='w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded'>
                Signup
              </button>
            </>:
        <>
<label className='font-semibold'>name:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3' type="email" placeholder='Enter email' />

              <label className='font-semibold'>password:</label>
              <input className='border rounded-sm py-1 px-3 w-full' type="password" placeholder='Enter password' />
              <button type="submit" className='w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded'>
                Signin
              </button>
        </>
        
        
      
      }
      
    
         </form>
      </div>
     
     
    </div>
  )
}

export default Signup