import React, { useState } from "react";
import {Box, TextField, Button, Divider, Tooltip, IconButton} from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';

function AddTask({newTask, setNewTask, addNewTask , category}) {

    const [addDescription, setAddDescription] = useState(false);

    const {text,  description,  dueDate} = newTask;
    console.table(text, description, dueDate);

    function handleInputChange(event) {
        const {name, value} = event.target;
        setNewTask((prev)=> (
            {
                ...prev,
                [name] : value
            }
        ));
    };

    function handleAddDescriptionClick() {
        setAddDescription((prev)=> !prev);
    }

    if(category==="Tasks" || category==="Completed"){
        return;
    }


    return <Box className="add-task"
    sx={{backgroundColor:"#ffffff", 
    paddingBlock:"5px",
    borderRadius:"5px"
    }}>
    <Box px="20px" display="flex" alignItems="center" justifyContent="space-between">
    <TextField 
    fullWidth
    value={text} 
    onChange={handleInputChange}
    name="text"
    id="standard-basic" 
    label="Add task" 
    variant="standard"/>
    <Tooltip title="Add description">
        <IconButton onClick={handleAddDescriptionClick}>
            <DescriptionIcon/>
        </IconButton>
    </Tooltip>
    </Box>
    <Divider orientation="horizontal"/>
    <Box py="4px" px="20px"
    sx={{display:"flex", justifyContent:"space-between"}}>
    <label>Add a due date 
    <input 
    value={dueDate}
    onChange={handleInputChange} 
    name="dueDate" 
    className="date-input" 
    type="date"/>
    </label>
    <Button onClick={addNewTask} className="add-button" color="inherit" variant="contained">Add</Button>
    </Box>
    {
        addDescription && <Box px="20px" mb="5px">
        <TextField 
            fullWidth
            multiline
            value={description} 
            onChange={handleInputChange}
            name="description"
            id="standard-basic" 
            label="Add description" 
            variant="standard"/>
        </Box>
    }
    </Box>
}

export default AddTask;