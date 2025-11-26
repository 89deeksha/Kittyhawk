import React, { useState } from 'react'

function Todo() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [task, setTask] = useState([])

  const submithandle = (e) => {
    e.preventDefault()

    if (!title || !desc) {
      alert("Both fields are required")
      return
    }

    setTask([...task, { title, desc, completed: false }])
    setDesc('')
    setTitle('')
  }

  const toggleCompleted = (index) => {
    const updated = [...task]
    updated[index].completed = !updated[index].completed
    setTask(updated)
  }

  const deletehandle = (index) => {
    const copytask = [...task]
    copytask.splice(index, 1)
    setTask(copytask)
  }

  return (
    <div className='p-6 max-w-lg mx-auto bg-white shadow-md rounded'>
      <h1 className='text-3xl font-bold text-center mb-4'>To-do App</h1>

      {/* Form */}
      <form onSubmit={submithandle} className='flex flex-col gap-3'>
        <input type="text" className="border p-2 rounded" placeholder='Task Title' 
          value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="border p-2 rounded" placeholder='Task Description'
          value={desc} onChange={(e) => setDesc(e.target.value)} />

        <button className="bg-blue-600 text-white py-2 rounded">
          Add Task
        </button>
      </form>

      {/* Task List */}
      {task.length === 0 ? (
        <h2 className='bg-gray-500 mt-3 p-5 text-white text-center'>No task available</h2>
      ) : (
        task.map((t, index) => (
          <div key={index}
            className='p-3 flex justify-between items-center border-b'>

            <div className={`${t.completed ? "line-through opacity-60" : ""}`}>
              <h3 className='font-semibold'>{t.title}</h3>
              <p className='text-sm text-gray-700'>{t.desc}</p>
            </div>

            <div className='flex gap-2'>
              <button
                onClick={() => toggleCompleted(index)}
                className={`px-3 py-1 rounded text-white 
                ${t.completed ? "bg-green-600" : "bg-blue-500"}`}>
                {t.completed ? "Undo" : "Done"}
              </button>

              <button 
                className='px-3 py-1 bg-black text-white rounded'
                onClick={() => deletehandle(index)}>
                Delete
              </button>
            </div>

          </div>
        ))
      )}

    </div>
  )
}

export default Todo
