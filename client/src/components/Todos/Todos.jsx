import React from "react";
import {Box, Typography, Button} from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import AddTask from "./AddTask";
import Task from "./Task";

function Todos() {
    return <Box width="95%">
        <Box mb="20px" display="flex" justifyContent="space-between">
            <Typography variant="h6">My Day</Typography>
            <Button variant="text" startIcon={<SortIcon/>}>Sort</Button>
        </Box>
        <AddTask/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
    </Box>
}

export default Todos;