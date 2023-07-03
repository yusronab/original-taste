import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return(
        <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}