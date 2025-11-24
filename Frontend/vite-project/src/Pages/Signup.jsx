import React, { useState } from 'react'

function Signup() {

  const [credential, setCredential]=useState(true)

const[formData, setFormData]=useState({
  Name:"",
  Email:"",
  Password:""
})


  const handleSubmit=(e)=>{
e.preventDefault()
if(!formData || !formData.Name || !formData.Email || !formData.Password){
    alert("All fields are required")
  }
console.log(formData)
setFormData({
      Name: "",
      Email: "",
      Password: ""
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
              <input className='border rounded-sm py-1 px-3 w-full mb-3' type="text" placeholder='Enter name ' value={formData.Name} onChange={(e)=>setFormData({...formData,Name:e.target.value})} />

              <label className='font-semibold'>Email:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3' type="email" placeholder='Enter email' value={formData.Email} onChange={(e)=>setFormData({...formData,Email:e.target.value})}/>

              <label className='font-semibold'>Password:</label>
              <input className='border rounded-sm py-1 px-3 w-full' type="password" placeholder='Enter password' value={formData.Password} onChange={(e)=>setFormData({...formData,Password:e.target.value})} />
              <button type='submit' className='w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded'>
                Signup
              </button>
            </>:
        <>
<label className='font-semibold'>Email:</label>
              <input className='border rounded-sm py-1 px-3 w-full mb-3' type="email" placeholder='Enter email' />

              <label className='font-semibold'>Password:</label>
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