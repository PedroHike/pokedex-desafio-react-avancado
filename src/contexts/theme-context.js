import { createContext, useState } from "react";

export const themes = {
    light: {
        background: '#ffff00',
        transform: 'translateX(0)',
        border: '2px solid #fff',
        boxShadow: '0 0 3px #ffff00'
    },

    dark: {
        background: '#f0f0f0',
        transform: 'translateX(24px)',
        border: '1px solid #ffff',    
        boxShadow: '0 0 5px #ffff'
    }
}


export const ThemeContext = createContext({})

export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}