import { createContext } from "react";

const ThemeContext = createContext(
    {
        theme : "light",
        setTheme : () => {},
        allTodos : []
    }
);

export default ThemeContext;
