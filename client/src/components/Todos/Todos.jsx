import React from "react";
import {Box, Typography, Button} from "@mui/material";
import AddTask from "./AddTask";
import Task from "./Task";

function Todos() {
    return <Box>
        <Box mb="20px" display="flex" justifyContent="space-between">
            <Typography variant="h6">My Day</Typography>
            <Button variant="text">Sort</Button>
        </Box>
        <AddTask/>
    </Box>
}

export default Todos;