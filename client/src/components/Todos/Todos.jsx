import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Box, Typography, Button } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import AddTask from "./AddTask";
import Task from "./Task";

function Todos() {

    const [todos, setTodos] = useState([]);
    console.log(todos); 

    const API_BASE = "http://localhost:5000/todos/";

    useEffect(()=>{
        const fetchTodos = async ()=> {
            const response = await fetch(API_BASE);
            const data = await response.json();
            setTodos(data);
        };
        fetchTodos();
    },[]);
    

    return <Box width="95%">
        <Box mb="20px" display="flex" justifyContent="space-between">
            <Typography variant="h6">My Day</Typography>
            <Button variant="text" startIcon={<SortIcon/>}>Sort</Button>
        </Box>
        <AddTask/>
        {todos?.map((todo)=> (
            <Task
                key={nanoid()}
                text={todo.text}
                category={todo.category}
                dueDate={todo.dueDate}
                completed={todo.completed}
                important={todo.important}
                description={todo.description}
            />
        ))}
    </Box>
}

export default Todos;