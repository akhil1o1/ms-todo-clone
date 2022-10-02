import React from "react";
import { nanoid } from "nanoid";
import Task from "./Task";

function TaskList({todos, setEditedTask, setShowEditPane, saveEditedTask}) {
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