import React from "react";
import { nanoid } from "nanoid";
import { Typography, Box } from "@mui/material";
import Task from "./Task";

function TaskList({todos, setEditedTask, setShowEditPane, saveEditedTask}) {


    if(todos.length===0){
        return <Box width="100%" height="40vh" display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" color="red" fontWeight="bold">No todos found.</Typography>
        </Box>
    }

    return<>
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
                saveEditedTask={saveEditedTask}
            />
        ))}
    </>
}

export default TaskList;