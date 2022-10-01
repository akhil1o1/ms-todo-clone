import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Box, Typography, Button, Stack } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import AddTask from "./AddTask";
import Task from "./Task";
import DateFormatter from "./DateFormatter";
import EditTask from "./EditTask";

function Todos({category}) {
    console.log(`category: ${category}`);

    const [todos, setTodos] = useState([]);
    const [showEditPane, setShowEditPane] = useState(false);
    const [newTask, setNewTask] = useState({
        text: "",
        category: "",
        dueDate: "",
        description: ""
    });
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


    const addNewTask = async ()=> {
        const task ={
            ...newTask,
            category: category};

        const response = await fetch(API_BASE, {method: "POST", headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(task)})
        .then(res => res.json())
        .catch(err => console.log(`Error : ${err}`));

        setTodos((prevTodos)=> (
            [...prevTodos, response]
        ));
        setNewTask({
        text: "",
        category: "",
        dueDate: "",
        description: ""
        });
    };

    
    const saveEditedTodo = async () =>{
        const response = await fetch(`${API_BASE}edit/${editedTask.id}`, {method: "PATCH",
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(editedTask)})
        .then(res => res.json())
        .catch(err => console.log(`Error : ${err}`));

        setTodos((prevTodos)=> {
            const newTodos = prevTodos.filter((todo)=> todo._id!==response._id);
            return [...newTodos, response];
        });
    };
    

    return<Box sx={{display: showEditPane ? "flex" : "block", gap: showEditPane ? "20px" : "none"}}> 
        <Box width="95%">
        <Box mb="20px" display="flex" justifyContent="space-between">
        <Stack>
        <Typography variant="h6" fontWeight="bold">{category}</Typography>
        <DateFormatter label={"Today"}/>
        </Stack>
            <Button variant="text" startIcon={<SortIcon/>}>Sort</Button>
        </Box>
        <AddTask 
        newTask={newTask} 
        setNewTask={setNewTask}
        addNewTask={addNewTask}
        />
        {todos?.map((todo)=> (
            <Task
                key={nanoid()}
                id={todo._id}
                text={todo.text}
                category={todo.category}
                entryDate={todo.entryDate}
                dueDate={todo.dueDate}
                completed={todo.completed}
                important={todo.important}
                description={todo.description}
                setShowEditPane={setShowEditPane}
                setEditedTask={setEditedTask}
                saveEditedTodo={saveEditedTodo}
                editedTask={editedTask}
            />
        ))}
    </Box>
    {
        showEditPane && <EditTask 
        setShowEditPane={setShowEditPane} 
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        saveEditedTodo={saveEditedTodo}
        />
    }
    </Box>
}

export default Todos;