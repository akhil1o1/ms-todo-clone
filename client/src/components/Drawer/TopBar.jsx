import React from "react";
import {Box, AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DoneAllIcon from '@mui/icons-material/DoneAll';


function TopBar({drawerWidth, handleDrawerToggle}) {
    return <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
      boxShadow:'none'
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" mr="10px" fontWeight="600" noWrap component="div">
        To Do 
      </Typography>
      <DoneAllIcon fontSize="large" />
      <Box pl="50px">
      </Box>
    </Toolbar>
  </AppBar>
}

export default TopBar;