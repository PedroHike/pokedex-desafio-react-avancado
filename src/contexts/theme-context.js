import { createContext, useState} from "react";

export const themes = {
    light: {
        mainBg: '#efefef',

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
        },
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

        cardBg: '#1E1E1E',
        color:'#ffffff',
        background: '#171717',

        btn: {
            background: '#27ae60',
            color: '#FFFF'
        },
    }
}

const types = {
    "normal": "#A8A878",
    "fire": "#F08030",
    "water": "#6890F0",
    "electric": "#F8D030",
    "grass": "#78C850",
    "ice": "#98D8D8",
    "fighting": "#C03028",
    "poison": "#A040A0",
    "ground": "#E0C068",
    "flying": "#A890F0",
    "psychic": "#F85888",
    "bug": "#A8B820",
    "rock": "#B8A038",
    "ghost": "#705898",
    "dragon": "#7038F8",
    "dark": "#705848",
    "steel": "#B8B8D0",
    "fairy": "#EE99AC",
    "unknown": "#68A090",
    "shadow": "#604E82"
}


export const ThemeContext = createContext({})

export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme, types}}>
            {children}
        </ThemeContext.Provider>
    )
}