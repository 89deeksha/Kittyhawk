const Todo = require("../Models/todoModel");

// Add todo
exports.addTodo = async(req, res)=>{
    const { title, desc, userId } = req.body;

    if(!title || !desc || !userId){
        return res.status(400).json({ msg:"All fields required" });
    }

    const todo = new Todo({ title, desc, userId });
    await todo.save();
    res.status(201).json({ msg:"Todo added", todo });
};

// Get all todos
exports.getTodos = async(req,res)=>{
    const todos = await Todo.find({ userId: req.params.id });
    res.json(todos);
};

// Delete todo
exports.deleteTodo = async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    res.json({msg:"Todo deleted"});
};
