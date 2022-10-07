import React, {useState} from 'react';
import {Box, CssBaseline, Toolbar} from "@mui/material";
import Todos from './components/Todos/Todos';
import TopBar from './components/Drawer/TopBar';
import MobileScreenDrawer from './components/Drawer/MobileScreenDrawer';
import SmallScreenDrawer from './components/Drawer/SmallScreenDrawer';
import ThemeContext from './Context/themeContext';
import "./App.css";

const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState("My day"); 
  const [theme , setTheme] = useState("light");

  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (<ThemeContext.Provider value={{theme, setTheme}}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <MobileScreenDrawer 
        container={container} 
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        category={category}
        setCategory={setCategory}
        />
        <SmallScreenDrawer
        drawerWidth={drawerWidth}
        category={category}
        setCategory={setCategory} 
        />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Todos category={category}/>
      </Box>
    </Box>
    </ThemeContext.Provider>
  );
}

export default App;

