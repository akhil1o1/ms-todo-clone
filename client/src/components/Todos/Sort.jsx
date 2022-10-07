import React, {useEffect, useState} from 'react';
import {Button, Menu, MenuItem, Divider, ListItemText, ListItemIcon} from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';


const sortItems = [
  {icon : <StarBorderOutlinedIcon fontSize='small'/> , text : "Importance" },
  {icon : <CalendarMonthOutlinedIcon fontSize='small'/> , text : "Due date" },
  {icon : <SortByAlphaOutlinedIcon fontSize='small'/> , text : "Alphabetically" },
  {icon : <AddBoxOutlinedIcon fontSize='small'/> , text : "Creation date" },
];


function Sort({filteredTodos, setFilteredTodos}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortBy, setSortBy] = useState("");
  console.log(filteredTodos);

  useEffect(()=> {
    
  }, [sortBy, filteredTodos, setFilteredTodos]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  function handleSort(name) {
    setSortBy(name);
    setAnchorEl(null);
  }
  
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        startIcon={<SortIcon/>}
        onClick={handleClick}
      >
        Sort
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleSort}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Sort by</MenuItem>
        <Divider/>
        {
          sortItems.map((item)=> (
            <MenuItem key={item.text} onClick={()=> handleSort(item.text)}>
        <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </MenuItem>
          ))
        }
      </Menu>
    </>
  );
}

export default Sort;


