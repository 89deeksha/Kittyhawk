import React, { useState } from 'react'

function Signup() {

  const [credential, setCredential]=useState(false)
  return (
   <div className="min-h-screen flex items-center justify-center">
      <div className="h-[300px] w-[400px] border p-6 bg-white rounded-lg shadow-lg">
        <h1 className='text-center text-2xl font-semibold'>Signup</h1>
        <div className='flex gap-2'>
          <button className='border px-2 py-1'>Signup</button>
          <button className='border px-2 py-1'>Signin</button>
        </div>
         
      <form action="">
    <label className='mt-3 font-semibold'>Name: </label><input className='border rounded-sm py-1 px-5' type="text" placeholder='name' />
         </form>
      </div>
     
     
    </div>
  )
}

export default Signup