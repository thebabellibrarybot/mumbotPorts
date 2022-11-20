import React, { useState } from "react";

import { ThemeContext } from "./themeContext";

const ThemeProvider = ({children}) => {
    
    // add state saver in local storage for onload...

    const [isDarkMode, setIsDarkMode] = useState(false);
    console.log(isDarkMode, 'is darkmode from themeProvider')
    const toggleDarkMode = () => {
        setIsDarkMode(curr => !curr)
    }

    return ( 
        <ThemeContext.Provider value = {{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;