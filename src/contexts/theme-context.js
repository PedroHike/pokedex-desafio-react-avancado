import { createContext, useState } from "react";

export const themes = {
    light: {
        bgTheme: '#ffff00',
        transform: 'translateX(0)',
        border: '2px solid #ffff',
        boxShadow: '0 0 3px #ffff00',
        mainBg: '#EBF3E8',
        togglerBg: '#c5e6f1',
        skyBoxShadow:'0 1px 2px #0000005d',
        cardBg: ''
    },

    dark: {
        bgTheme: '#f0f0e0',
        transform: 'translateX(24px)',
        border: '1px solid #ffff',    
        boxShadow: '0 0 5px #ffff',
        mainBg:'#393636',
        togglerBg:'#393636',
        skyBoxShadow:'0 0 5px #ffff'
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