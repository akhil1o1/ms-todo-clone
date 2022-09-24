import React, {useState} from "react";
import { Box, Stack, Typography, IconButton} from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


function Task() {

    const [editing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing((prev)=> !prev);
    }

    return <Box onClick={handleEditClick} className="task" mt="10px" py="7px" px="15px" >
    <Box display="flex" alignItems="center" justifyContent="space-between">
    <Stack direction="row" spacing={2}>
        <CheckCircleOutlineOutlinedIcon className="icon"/>
        <Typography variant="body1">test</Typography>
    </Stack>
        <IconButton><StarBorderOutlinedIcon className="icon"/></IconButton>
    </Box>
    {editing && <Box py="20px" px="15px" display="flex" justifyContent="space-between">
        <Typography>Added to my day</Typography>
        <Typography>Due date</Typography>
        <Typography>Delete</Typography>
    </Box>}
    </Box>
}

export default Task;