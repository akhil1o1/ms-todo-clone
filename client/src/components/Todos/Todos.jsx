import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Box, Typography, Button, Stack } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import AddTask from "./AddTask";
import Task from "./Task";
import DateFormatter from "./DateFormatter";
import EditTask from "./EditTask";

function Todos({category}) {

    const [todos, setTodos] = useState([]);
    const [editTask, setEditTask] = useState(false);

    console.log(editTask); 

    const API_BASE = "http://localhost:5000/todos/";

    useEffect(()=>{
        const fetchTodos = async ()=> {
            const response = await fetch(API_BASE);
            const data = await response.json();
            setTodos(data);
            console.log("use effect ran");
        };
        fetchTodos();
    },[]);
    

    return<Box sx={{display: editTask ? "flex" : "block", gap: editTask ? "20px" : "none"}}> 
        <Box width="95%">
        <Box mb="20px" display="flex" justifyContent="space-between">
        <Stack>
        <Typography variant="h6" fontWeight="bold">{category}</Typography>
        <DateFormatter label={"Today"}/>
        </Stack>
            <Button variant="text" startIcon={<SortIcon/>}>Sort</Button>
        </Box>
        <AddTask/>
        {todos?.map((todo)=> (
            <Task
                key={nanoid()}
                text={todo.text}
                setEditTask={setEditTask}
                category={todo.category}
                entryDate={todo.entryDate}
                dueDate={todo.dueDate}
                completed={todo.completed}
                important={todo.important}
                description={todo.description}
            />
        ))}
    </Box>
    {
        editTask && <EditTask/>
    }
    </Box>
}

export default Todos;