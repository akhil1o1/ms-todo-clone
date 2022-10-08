import React, {useContext} from "react";
import {Toolbar, Divider, List, ListItem, ListItemText, ListItemButton, ListItemIcon} from "@mui/material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import ThemeContext from "../../Context/themeContext";

function Navigation({category, setCategory}) {

  const ctx = useContext(ThemeContext);
  const {theme} = ctx;

  function handleClick(listname) {
    setCategory(listname);
  };


    const listNames = [
        {name : "My day", icon : <WbSunnyOutlinedIcon/> },
        {name : "Important", icon : <StarBorderOutlinedIcon/> },
        {name : "Planned", icon : <CalendarMonthOutlinedIcon/>},
        {name : "Assigned to me", icon : <PersonOutlineOutlinedIcon/>},
        {name : "Tasks", icon : <AssignmentOutlinedIcon/>},
        {name : "Completed", icon : <CheckCircleOutlineOutlinedIcon/>},
      ];  

      

    return <>
      <Toolbar />
      <Divider />
      <List>
        {listNames.map((list, index) => (
          <ListItem key={list.name} disablePadding>
            <ListItemButton className={category===list.name && theme==="light" ? "slected-category" : " "} onClick={()=> handleClick(list.name)}>
              <ListItemIcon className={category===list.name && theme==="light" ? "slected-category-icon" : " "}>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
}

export default Navigation;
