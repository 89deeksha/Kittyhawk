import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  // Add task
  const handleAdd = () => {
    if (!task || !desc) {
      alert("Please enter task & description");
      return;
    }

    const newTask = {
      id: Date.now(),
      task,
      desc,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");
    setDesc("");
  };

  // Delete
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle complete
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do App</h1>

      {/* INPUTS */}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <input
          type="text"
          placeholder="Task Description"
          className="border p-2 rounded"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* LIST */}
      <div className="mt-6">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No tasks added yet</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="border p-3 rounded mb-3 flex justify-between items-center"
            >
              <div>
                <h2
                  className={`text-xl font-semibold ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.task}
                </h2>
                <p className="text-gray-600">{todo.desc}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleToggle(todo.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  {todo.completed ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Todo;
