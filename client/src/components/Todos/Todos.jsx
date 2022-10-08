import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import EditTask from "./EditTask";
import ErrorAlert from "./ErrorAlert";
import Header from "./Header";


function Todos({category}) {
    console.log(`category: ${category}`);

    const [allTodos, setAllTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [showEditPane, setShowEditPane] = useState(false);
    const [newTask, setNewTask] = useState({
        text: "",
        category: "",
        dueDate: "",
        description: ""
    });
    const [editedTask, setEditedTask] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [searchTask, setSearchTask] = useState("");
    const [tasksFound, setTasksFound] = useState([]);

    console.log(searchTask);
  
    useEffect(()=>{ // to filter todos based on category
            if(category==="My day" || category==="Planned" || category==="Assigned to me"){
                setFilteredTodos(allTodos.filter(todo => todo.category===category));
            }else if(category==="Important"){
                setFilteredTodos(allTodos.filter(todo => todo.important===true));
            }else if(category==="Tasks"){
                setFilteredTodos(allTodos)
            }else if(category==="Completed"){
                setFilteredTodos(allTodos.filter(todo => todo.completed===true));
            }
            setShowEditPane(false);
    },[category, allTodos]); 

    useEffect(()=> { // to search tasks
        const searchedTasks = filteredTodos.filter((todo)=> todo.text.toLowerCase().includes(searchTask.toLowerCase()));
        setTasksFound(searchedTasks);
    },[searchTask, filteredTodos]);

    
    const API_BASE = "http://localhost:5000/todos/";

    useEffect(()=>{ // to fetch all todos on start
        const fetchTodos = async ()=> {
            const response = await fetch(API_BASE);
            const data = await response.json();
            setAllTodos(data);
            console.log("use effect ran");
        };
        fetchTodos();
    },[category]);


    const addNewTask = async ()=> {

        if(newTask.text.trim().length===0){
            setShowAlert(true);
            return;
        }
        const task ={
            ...newTask,
            category: category,
            important: category==="Important" ? true : false
        };

        const response = await fetch(API_BASE, {method: "POST", headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(task)})
        .then(res => res.json())
        .catch(err => console.log(`Error : ${err}`));

        setAllTodos((prevTodos)=> (
            [...prevTodos, response]
        ));
        setNewTask({text: "", category: "", dueDate: "", description: ""});
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

        if(saveTask?.text.trim().length===0){
            setShowAlert(true);
            return;
        }

        const response = await fetch(`${API_BASE}edit/${id}`, {method: "PATCH",
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(saveTask)})
        .then(res => res.json())
        .catch(err => console.log(`Error : ${err}`));

        setAllTodos((prevTodos)=> {
            const newTodos = prevTodos.filter((todo)=> todo._id!==response._id);
            return [...newTodos, response];
        });
        setShowEditPane(false);
    };

    const deleteTask = async (id) => {
        const response = await fetch(`${API_BASE}delete/${id}`, {method : "DELETE"})
        .then((res) => res.json())
        .catch((err) => console.log(`Error : ${err}`));

        setAllTodos((prevTodos)=> (
            prevTodos.filter((todo)=> todo._id !== response._id)
        ));
        setShowEditPane(false);
    };
    

    return<Box 
        sx={{
        display: showEditPane ? "flex" : "block", 
        gap: showEditPane ? "20px" : "none",
        }}> 
        <Box width="95%">
        <Header 
           category={category}
           searchTask={searchTask}
           setSearchTask={setSearchTask}
           filteredTodos={filteredTodos}
           setFilteredTodos={setFilteredTodos}
        />
        <AddTask 
        newTask={newTask} 
        setNewTask={setNewTask}
        addNewTask={addNewTask}
        category={category}
        /> 
        
        <ErrorAlert 
        showAlert={showAlert} 
        setShowAlert={setShowAlert}/>
                
        <TaskList 
        todos={searchTask ? tasksFound : filteredTodos}
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