import { createContext } from "react";

const Appcontext = createContext(
    {
        theme : "light",
        setTheme : () => {},
    }
);

export default Appcontext;
