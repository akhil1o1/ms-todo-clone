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
    const [edit, setEdit] = useState(false);
    const [editedTask, setEditedTask] = useState({});

    console.log(editedTask); 

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
    

    return<Box sx={{display: edit ? "flex" : "block", gap: edit ? "20px" : "none"}}> 
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
                setEdit={setEdit}
                setEditedTask={setEditedTask}
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
        edit && <EditTask editedTask={editedTask} setEditedTask={setEditedTask}/>
    }
    </Box>
}

export default Todos;