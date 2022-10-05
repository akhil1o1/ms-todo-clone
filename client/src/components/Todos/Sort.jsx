import React from 'react';
import {Button, Menu, MenuItem, Divider, ListItemText, ListItemIcon} from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';


function Sort() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Sort by</MenuItem>
        <Divider/>
        
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <StarBorderOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Importance</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <CalendarMonthOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Due Date</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <SortByAlphaOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Alphabetically</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <AddBoxOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Creation Date</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Sort;


