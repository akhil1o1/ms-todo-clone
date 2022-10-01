import React, {useState} from "react";
import { Box, Stack, Typography, IconButton, Tooltip} from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import DateFormatter from "./DateFormatter";

function Task({text, id, category, description, dueDate, important, completed, entryDate, setShowEditPane, setEditedTask, editedTask, saveEditedTask}) {

    const [expand, setExpand] = useState(false);

    function handleExpandClick() {
        setExpand((prev)=> !prev);
    };

    function handleEditPaneClick() {
        setShowEditPane(true);
        setEditedTask({text, id, category, description, dueDate, important, completed, entryDate});
    };
    ////directly save the edit using api call

    function toggleIcon(buttonName) {
        setEditedTask((prevEditedTask)=> (
            {
                ...prevEditedTask,
                [buttonName] : buttonName==="completed" ? !editedTask.completed : !editedTask.important
            }
        ));
    };

    // const handleTaskIconClick = async (buttonName)=> {
    //     console.log(`buttonName : ${buttonName}`);
    //     await setEditedTask({text, id, category, description, dueDate, important, completed, entryDate})
    //     toggleIcon(buttonName);
    //     saveEditedTask();
    // }

    function handleTaskIconClick(buttonName){
        console.log(`buttonName : ${buttonName}`);
        setEditedTask({text, id, category, description, dueDate, important, completed, entryDate});
        toggleIcon(buttonName);
        saveEditedTask();
    }

    return <Box className="task" mt="10px" py="7px" px="15px" >
    <Box display="flex" alignItems="center" justifyContent="space-between">
    <Stack direction="row" alignItems="center" spacing={2}>
    <Tooltip title={completed ? "Mark as incomplete" : "Mark as complete"} placement="bottom">
    <IconButton onClick={()=> handleTaskIconClick("completed")}>
    {
        completed ? <CheckCircleIcon className="icon"/>
        :  <CheckCircleOutlineOutlinedIcon className="icon"/>
    }
    </IconButton>
    </Tooltip>
    <Typography sx={{cursor:"pointer"}} onClick={handleExpandClick} >{text}</Typography>
    </Stack>
    <Tooltip title={important ? "Remove importance" : "Mark as important"} placement="bottom">
    <IconButton onClick={()=> handleTaskIconClick("important")}>
        {
            important ? <StarIcon className="icon"/>  
             :<StarBorderOutlinedIcon className="icon"/>
        }
    </IconButton>
    </Tooltip>
    </Box>
    {expand && <Box py="5px" >
    {description && <Box my="10px" display="flex" alignItems="center" justifyContent="space-between">
        <Typography><span className="bold-text">Description</span> : {description}</Typography>
        <Tooltip title="Edit task">
        <IconButton onClick={handleEditPaneClick}>
            <EditIcon className="icon"/>
        </IconButton>
        </Tooltip>
    </Box>}
    <Box  display="flex" justifyContent="space-between">
    <Typography variant="body2"><span className="bold-text">Added to</span> : {category}</Typography>
    {dueDate && <DateFormatter label={"Due Date"} date={dueDate}/>}
    <DateFormatter date={entryDate} label={"Added at"}/>
    </Box>  
    </Box>}
    </Box>
}

export default Task;