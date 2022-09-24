import React from "react";
import {Box, TextField, Button, Divider} from "@mui/material";

function AddTask() {
    return <Box className="add-task"
    sx={{backgroundColor:"#ffffff", 
    paddingBlock:"5px",
    borderRadius:"5px"
    }}>
    <Box px="20px"><TextField fullWidth id="standard-basic" label="Add task" variant="standard"/></Box>
    <Divider orientation="horizontal"/>
    <Box py="4px" px="20px"
    sx={{display:"flex", justifyContent:"space-between"}}>
    <label>Add a due date <input name="due date" className="date-input" type="date"/></label>
    <Button className="add-button" color="inherit" variant="contained">Add</Button>
    </Box>
    </Box>
}

export default AddTask;