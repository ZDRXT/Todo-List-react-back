import express from "express";
import { createTodo, getAllTodos, getTodo, deleteTodo, updateTodo } from "../controllers/todos.controller.js"

const todoRouter = express.Router()

todoRouter.get("/", getAllTodos)
todoRouter.get("/:id", getTodo)
todoRouter.post("/", createTodo)
todoRouter.patch("/:id", updateTodo)
todoRouter.delete("/:id", deleteTodo)

export default todoRouter