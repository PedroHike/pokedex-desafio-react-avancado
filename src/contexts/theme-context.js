import { createContext, useState, useContext } from "react";

export const themes = {
    light: {
        mainBg: '#EBF3E8',

        btnToggler: {
            togglerBg: '#c5e6f1',
            skyBoxShadow:'0 1px 2px #0000005d',
            bgTheme: '#ffff00',
            boxShadow: '0 0 3px #ffff00',
            border: '2px solid #ffff',
            transform: 'translateX(0)',
        },
        cardBg: '#fff',
        color:'#000000',
        background: '#fafaf0',
        btn: {
            background: '#ffe60088',
            color: '#0391c5'
        }
    },

    dark: {
        mainBg:'#393636',

        btnToggler: {
            togglerBg:'#393636',
            skyBoxShadow:'0 0 5px #ffff',
            bgTheme: '#f0f0e0',
            boxShadow: '0 0 5px #ffff',
            border: '2px solid #ffff',
            transform: 'translateX(24px)',
        },


        cardBg: '#231932',
        color:'#ffffff',
        background: '#171717',

        btn: {
            background: '#0391c5',
            color: '#ffe600'
        }
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

export const useMyContext = () => {
    return useContext(ThemeContext);
};