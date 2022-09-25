import Todo from "../model/todo.js";

export const getTodos = async (req, res)=>{
    const todos = await Todo.find({});
    res.json(todos);
};

export const postTodo = (req, res)=>{

};

export const editTodo = (req, res)=>{

};

export const deleteTodo = (req, res)=>{

};

