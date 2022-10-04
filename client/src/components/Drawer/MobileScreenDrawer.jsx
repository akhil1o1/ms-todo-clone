import React from "react";
import {Drawer, } from "@mui/material";
import Navigation from "./Navigation";

function MobileScreenDrawer({container, mobileOpen, drawerWidth, category, setCategory, handleDrawerToggle}) {
    return <Drawer
    container={container}
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true,
    }}
    sx={{
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
  >
    <Navigation category={category} setCategory={setCategory}/>
  </Drawer>
}

export default MobileScreenDrawer;