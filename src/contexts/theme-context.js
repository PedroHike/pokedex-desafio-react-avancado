import { createContext } from "react";

export const themes = {
    light: {
        background: 'rgba(255, 225, 0, 0.646)',
        transform: 'translateX(0)',
        border: '1px solid rgba(255, 225, 0)',
        boxShadow: '0 0px 5px rgba(255, 225, 0)'
    },

    dark: {
        background: '#f0f0f0',
        transform: 'translateX(24px)',
        border: '1px solid #ffff',    
        boxShadow: '0 0 5px #ffff'
    }
}


export const ThemeContext = createContext({})

export const ThemeProvider = (props)=>{
    return(
        <ThemeContext.Provider value={{themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}