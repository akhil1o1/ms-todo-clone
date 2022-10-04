import React from "react";
import {Drawer} from "@mui/material";
import Navigation from "./Navigation";

function SmallScreenDrawer({drawerWidth, category, setCategory}) {
    return <Drawer
    variant="permanent"
    sx={{
      display: { xs: 'none', sm: 'block' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
    open
  >
    <Navigation category={category} setCategory={setCategory}/>
  </Drawer>
}

export default SmallScreenDrawer;