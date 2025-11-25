import React, { useState } from 'react'

function Todo() {
  const [title, setTitle]=useState("")
  const[desc, setDesc]=useState("")
  const [task, setTask]=useState([])

  const submithandle=(e)=>{
e.preventDefault()
// console.log(title)
// console.log(desc);
setTask([...task,{title,desc}])
// console.log(task)
setDesc('')
setTitle('')

  }
  
  return (
    <div className='p-6 max-w-lg mx-auto bg-white shadow-md rounded'>
        <h1 className='text-3xl font-bold text-center mb-4'>To-do App</h1>
        <div >
          <form onSubmit={submithandle} className='flex flex-col gap-3'>
            <input type="text" className="border p-2 rounded" placeholder='Task Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
             <input type="text" className="border p-2 rounded" placeholder='Task Description' value={desc} onChange={(e)=>setDesc(e.target.value)} />
            <button
          
          
          className="bg-blue-600 text-white py-2 rounded"
        >
          
          Add Task
        </button>
          </form>
         
          {
          task.length === 0 ? (
            <h2 className='bg-gray-500 mt-3 p-5'>No task available</h2>
          ) : (
            task.map((t, index) => (
              <div key={index} className='p-2 flex justify-between border-b'>
                <div>
                <h3 className='font-semibold'>{t.title}</h3>
                <p className='text-sm text-gray-700'>{t.desc}</p>
                </div>
                <div className='flex gap-3'>
                <button className='p-2 border bg-blue-400 text-white rounded-sm'>Done</button>
                <button className='p-2 border bg-black text-white rounded-sm'>Delete</button>
                </div>
              </div>
            ))
          )
        }
        </div>
    </div>
  )
}

export default Todo