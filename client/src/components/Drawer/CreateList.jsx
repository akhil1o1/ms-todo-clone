import React, {useState} from "react";
import { nanoid } from "nanoid";
import {Box, TextField, Typography, IconButton, Tooltip, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';


function CreateList({ setList }) {

    const [customLists, setCustomLists] = useState([]);
    const [listName, setListName] = useState("");
    console.log("listname", listName);

    function handleChange(event) {
        const { value } = event.target;
        setListName(value);
    };

    function handleClick() {
         setList((prev)=> (
            [ ...prev, {name: listName.trim(), icon: <ListAltOutlinedIcon/>, customList: true }]
         ));
         setListName("");
    };

    ///add delete functionality to created lists and if can may be edit listname too.

    return <Box py="20px" px="10px">
           <Typography variant="body1" fontWeight="bold" my="15px">Create custom list</Typography>
           <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextField  label="Enter list name" variant="standard" size="small"  
            value={listName}
            onChange={handleChange}/>
            <Tooltip title="Create list">
                <IconButton onClick={handleClick}>
                    <AddBoxOutlinedIcon/>
                </IconButton>
            </Tooltip>
            </Box>
            <List>
        {customLists.map((list) => (
          <ListItem key={nanoid()} disablePadding>
            <ListItemButton className={category===list.name && theme==="light" ? "slected-category" : " "} onClick={()=> handleClick(list.name)}>
              <ListItemIcon className={category===list.name && theme==="light" ? "slected-category-icon" : " "}>
                <ListAltOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Box>
}

export default CreateList;