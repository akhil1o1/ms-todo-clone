import React, { useContext } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import appContext from "../../Context/appContext";
import MenuIcon from "@mui/icons-material/Menu";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

function TopBar({ drawerWidth, handleDrawerToggle }) {
  const ctx = useContext(appContext);
  const { theme, setTheme } = ctx;

  function handleClick() {
    const switchThemeTo = theme === "light" ? "dark" : "light";
    setTheme(switchThemeTo);
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box display="flex">
          <Typography
            variant="h6"
            mr="10px"
            fontWeight="600"
            noWrap
            component="div"
          >
            To Do
          </Typography>
          <DoneAllIcon fontSize="large" />
        </Box>
        <Box pl="50px"></Box>
        <Tooltip
          title={theme === "light" ? "Turn off the light" : "Turn on the light"}
        >
          <IconButton
            onClick={handleClick}
            color="success"
            sx={{ borderRadius: "100%", border: "1px solid white" }}
          >
            {theme === "light" ? (
              <NightlightOutlinedIcon sx={{ color: "#fff" }} />
            ) : (
              <LightModeOutlinedIcon sx={{ color: "#fff" }} />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
