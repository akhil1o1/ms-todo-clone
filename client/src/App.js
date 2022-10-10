import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Todos from "./components/Todos/Todos";
import TopBar from "./components/Drawer/TopBar";
import MobileScreenDrawer from "./components/Drawer/MobileScreenDrawer";
import SmallScreenDrawer from "./components/Drawer/SmallScreenDrawer";
import ThemeContext from "./Context/appContext";
import "./App.css";

const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState("My day");
  const [theme, setTheme] = useState("light");
  const [allTodos, setAllTodos] = useState([]);

  const appTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const API_BASE = "http://localhost:5000/todos/";

  useEffect(() => {
    // to fetch all todos on start
    const fetchTodos = async () => {
      const response = await fetch(API_BASE);
      const data = await response.json();
      setAllTodos(data);
    };
    fetchTodos();
  }, [category]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={appTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: theme === "light" ? "#f3f2f1" : "#000000c4",
          }}
        >
          <CssBaseline />
          <TopBar
            drawerWidth={drawerWidth}
            handleDrawerToggle={handleDrawerToggle}
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
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Todos
              category={category}
              allTodos={allTodos}
              setAllTodos={setAllTodos}
            />
          </Box>
        </Box>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
