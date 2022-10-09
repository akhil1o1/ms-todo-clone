import React, {useContext, useState} from "react";
import { nanoid } from "nanoid";
import {Toolbar, Divider, List, ListItem, ListItemText, ListItemButton, ListItemIcon} from "@mui/material";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


import CreateList from "./CreateList";
import ThemeContext from "../../Context/themeContext";

const listNames = [
  {name : "My day", icon : <WbSunnyOutlinedIcon/>, customList: false },
  {name : "Important", icon : <StarBorderOutlinedIcon/>, customList: false },
  {name : "Planned", icon : <CalendarMonthOutlinedIcon/>, customList: false},
  {name : "Assigned to me", icon : <PersonOutlineOutlinedIcon/>, customList: false},
  {name : "Tasks", icon : <AssignmentOutlinedIcon/>},
  {name : "Completed", icon : <CheckCircleOutlineOutlinedIcon/>, customList: false},
];  



function Navigation({category, setCategory}) {

  const [list, setList] = useState(listNames);

  const ctx = useContext(ThemeContext);
  const {theme, allTodos} = ctx;
  console.log("alltodos", allTodos);

 
  function handleClick(listname) {
    setCategory(listname);
  };


    return <>
      <Toolbar />
      <Divider />
      <List>
        {list.map((list, index) => (
          <ListItem key={nanoid()} disablePadding>
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
      <CreateList setList={setList}/>
    </>
}

export default Navigation;
