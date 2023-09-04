const TodoSchema = require("../models/todo");

const todoRouter = {};

todoRouter.getTodos = async (req, res) => {
  try {
    const todos = await TodoSchema.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

todoRouter.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoSchema.findById(id);
    if (!todo) throw Error("No todo item found");
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

todoRouter.createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = new TodoSchema({ title, description });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

todoRouter.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, done } = req.body;
  try {
    const todo = await TodoSchema.findById(id);
    todo.title = title ?? todo.title;
    todo.description = description ?? todo.description;
    todo.done = done ?? todo.done;
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

todoRouter.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await TodoSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = todoRouter;
