import React from "react";
import {Toolbar, Divider, List, ListItem, ListItemText, ListItemButton, ListItemIcon} from "@mui/material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Navigation() {

    const listNames = [
        {name : "MyDay", icon : <WbSunnyOutlinedIcon/> },
        {name : "Important", icon : <StarBorderOutlinedIcon/> },
        {name : "Planned", icon : <CalendarMonthOutlinedIcon/>},
        {name : "Completed", icon : <CheckCircleOutlineOutlinedIcon/>},
        {name : "Assigned to me", icon : <PersonOutlineOutlinedIcon/>},
        {name : "Tasks", icon : <AssignmentOutlinedIcon/> },
      ];  

    return <>
        <div>
      <Toolbar />
      <Divider />
      <List>
        {listNames.map((list, index) => (
          <ListItem key={list.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
    </>
}

export default Navigation;
