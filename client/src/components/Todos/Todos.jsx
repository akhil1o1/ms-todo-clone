import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import AddTask from "./AddTask";
import TaskList from "./TaskList";
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

   
    const saveEditedTask = async (task, iconName) =>{
        let saveTask= {};
        const id = task && iconName ? task.id : editedTask.id;

        if(task && iconName){
            saveTask = {
                ...task,
                [iconName] : iconName==="completed" ? !task.completed : !task.important
            };
        }else{
            saveTask = editedTask;
        }

        const response = await fetch(`${API_BASE}edit/${id}`, {method: "PATCH",
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(saveTask)})
        .then(res => res.json())
        .catch(err => console.log(`Error : ${err}`));

        setTodos((prevTodos)=> {
            const newTodos = prevTodos.filter((todo)=> todo._id!==response._id);
            return [...newTodos, response];
        });
    };

    const deleteTask = async (id) => {
        const response = await fetch(`${API_BASE}delete/${id}`, {method : "DELETE"})
        .then((res) => res.json())
        .catch((err) => console.log(`Error : ${err}`));

        setTodos((prevTodos)=> (
            prevTodos.filter((todo)=> todo._id !== response._id)
        ));
        setShowEditPane(false);
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
                
        <TaskList 
        todos={todos}
        setShowEditPane={setShowEditPane}
        setEditedTask={setEditedTask}
        saveEditedTask={saveEditedTask}
        />
    </Box>
    {
        showEditPane && <EditTask 
        setShowEditPane={setShowEditPane} 
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        saveEditedTask={saveEditedTask}
        deleteTask={deleteTask}
        />
    }
    </Box>
}

export default Todos;