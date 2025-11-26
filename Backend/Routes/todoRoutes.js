const express = require("express");
const router = express.Router();
const { addTodo, getTodos, deleteTodo } = require("../Controllers/todoController");

router.post("/add", addTodo);
router.get("/all/:id", getTodos);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
