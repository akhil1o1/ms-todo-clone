import React from "react";
import {Box, Typography, TextField, Stack, Tooltip, Divider} from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DateFormatter from "./DateFormatter";

function EditTask({editedTask}) {

    const {text, category, description, dueDate, important, completed, entryDate, 
        setEditedTask} = editedTask;

    const completeIcon = completed ? <CheckCircleIcon className="icon"/> 
    : <CheckCircleOutlineOutlinedIcon className="icon"/> ;

    const importanceIcon = important ? <StarIcon className="icon"/> 
    : <StarBorderOutlinedIcon className="icon"/> ;


    return <Box className="editTask" sx={{backgroundColor:"#ffffff"}} mt="75px" p="15px" width="30vw"  >
    <Typography variant="h6" mb="10px">Edit Task</Typography>
    <Divider/>
    <Typography my="10px" >Added to  {category}</Typography> 
    <Divider/>
    <Stack py="10px" direction="row" alignItems="center" justifyContent="space-between">
    <Tooltip title={completed ? "Mark as incomplete" : "Mark as complete"}>
    {completeIcon}
    </Tooltip>
    <TextField 
        id="standard-basic"  
        variant="standard" 
        placeholder="Enter task"
        autoFocus 
        value={text}/>
    <Tooltip title={important ? "Remove importance" : "Mark as important"}>
    {importanceIcon}
    </Tooltip>
    </Stack>
    <Typography my="12px">Task description</Typography>
    <Box mb="15px">
    <TextField
        id="standard-textarea"
        placeholder="Description"
        multiline
        variant="standard"
        fullWidth
        value={description}/> 
    </Box>
    <Box py="10px">
    <DateFormatter date={entryDate} label={"Added at"}/>
    </Box>
    <Divider/>
    <Box py="10px">
    <DateFormatter date={dueDate} label={"Due Date"}/>
    </Box>
    <Divider/>
    <Box py="10px">
    <label>Edit due date <input name="due date" value={dueDate} className="date-input" type="date"/></label>
    </Box>
    </Box>
}

export default EditTask;