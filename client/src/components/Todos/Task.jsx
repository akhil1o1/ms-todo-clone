import React, {useState} from "react";
import { Box, Stack, Typography, IconButton} from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


function Task({text, category, description, dueDate, important, completed}) {

    const [editing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing((prev)=> !prev);
    }

    return <Box onClick={handleEditClick} className="task" mt="10px" py="7px" px="15px" >
    <Box display="flex" alignItems="center" justifyContent="space-between">
    <Stack direction="row" spacing={2}>
        <CheckCircleOutlineOutlinedIcon className="icon"/>
        <Typography variant="body1">{text}</Typography>
    </Stack>
        <IconButton><StarBorderOutlinedIcon className="icon"/></IconButton>
    </Box>
    {editing && <Box py="5px" px="15px">
    {description && <Box my="10px">
        <Typography variant="body1">Description : {description}</Typography>
    </Box>}
    <Box  display="flex" justifyContent="space-between">
    <Typography>Added to : {category}</Typography>
    {dueDate && <Typography>Due date : {dueDate}</Typography>}
    </Box>  
    </Box>}
    </Box>
}

export default Task;