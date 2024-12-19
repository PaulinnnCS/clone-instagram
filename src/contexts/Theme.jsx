import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("");

    const toggleTheme = (prev) => prev === "light" ? "#FFFFFF" : "#000000";

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}