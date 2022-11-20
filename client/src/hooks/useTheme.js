import { useContext } from "react";

import { ThemeContext } from "../context/themeContext";

const useTheme = () => {
    console.log('useTheme.js used')
    return useContext(ThemeContext);
}

export default useTheme;
