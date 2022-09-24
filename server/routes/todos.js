import express from "express";
const router = express.Router();///////////////match with expenses.js routes in case of error
import {getTodos, postTodo, editTodo, deleteTodo} from "../controllers/todos.js";

router.get("/", getTodos);
router.post("/", postTodo);
router.patch("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

export default router;