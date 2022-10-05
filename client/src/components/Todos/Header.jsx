import React from "react";
import {Box, Stack, TextField, Typography} from "@mui/material";
import DateFormatter from "./DateFormatter";
import Sort from "./Sort";

function Header({searchTask, category, setSearchTask}) {

    function handleSearchInputChange(event) {
        const { value } = event.target;
        value.trim();
        setSearchTask(value);
    }


    return <Box mb="20px" display="flex" justifyContent="space-between">
    <Stack>
    <Typography variant="h6" fontWeight="bold">{category}</Typography>
    <DateFormatter label={"Today"}/>
    </Stack>
    <TextField sx={{width:"50%"}} 
    onChange={handleSearchInputChange}
    value={searchTask}
    size="small" 
    label="Search Tasks" 
    variant="filled" />
       <Sort/>
    </Box>

}

export default Header;