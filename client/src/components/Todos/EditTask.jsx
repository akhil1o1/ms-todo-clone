import React from "react";
import {Box, Typography, TextField, Stack, Tooltip, Divider, Button, IconButton} from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import DateFormatter from "./DateFormatter";

function EditTask({editedTask, setEditedTask, setShowEditPane}) {

    const {text, category, description, dueDate, important, completed, entryDate} = editedTask;

    const completeIcon = completed ? <CheckCircleIcon className="icon"/> 
    : <CheckCircleOutlineOutlinedIcon className="icon"/> ;

    const importanceIcon = important ? <StarIcon className="icon"/> 
    : <StarBorderOutlinedIcon className="icon"/> ;


    function handleCloseClick() {
        setShowEditPane(false);
    };

    function handleEditChange(event) {
        const {name, value} = event.target;
        setEditedTask((prev)=>(
            {
                ...prev,
                [name]: value
            }
        ));
    };

    function handleEditClick(buttonName) {
        setEditedTask((prev)=> (
            {
                ...prev,
                [buttonName] : buttonName==="completed" ? !completed : !important
            }
        ));
    };

    return <Box className="editTask" sx={{backgroundColor:"#ffffff"}} mt="75px" p="15px" width="30vw" minHeight="80vh">
    <Box pb="10px" display="flex" alignItems="center" justifyContent="space-between">
    <Typography variant="h6" mb="10px" fontWeight="bold">Edit Task</Typography>
    <Button className="add-button" color="inherit" variant="contained">Save Edit</Button>
    </Box>
    <Divider/>
    <Typography my="10px" fontWeight="bold">Added to  {category}</Typography> 
    <Divider/>
    <Stack py="10px" direction="row" alignItems="center" justifyContent="space-between">
    <Tooltip title={completed ? "Mark as incomplete" : "Mark as complete"}>
    <IconButton onClick={()=>handleEditClick("completed")}>
    {completeIcon}
    </IconButton>
    </Tooltip>
    <TextField 
        id="standard-basic"  
        variant="standard"
        name="text" 
        onChange={handleEditChange}
        placeholder="Enter task"
        autoFocus 
        value={text}/>
    <Tooltip title={important ? "Remove importance" : "Mark as important"}>
    <IconButton onClick={()=>handleEditClick("important")}>
    {importanceIcon}
    </IconButton>
    </Tooltip>
    </Stack>
    <Typography my="12px" fontWeight="bold">Task description</Typography>
    <Box mb="15px">
    <TextField
        id="standard-textarea"
        name="description"
        onChange={handleEditChange}
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
    <Box py="10px" mb="10px">
    <label className="bold-text">Edit due date<input onChange={handleEditChange} name="dueDate" className="date-input" type="date"/></label>
    </Box>
    <Tooltip title="close">
    <IconButton onClick={handleCloseClick} size="small">
        <CloseIcon sx={{border:"1px solid", borderRadius:"100%"}}/>
    </IconButton>
    </Tooltip>
    </Box>
}

export default EditTask;