import styled from "styled-components"
import React, { useContext } from "react"
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Button } from "../button/button"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <Div>
            <Button onClick={()=>{
                setTheme(theme === themes.light ? themes.dark : themes.light);
                console.log(theme.background);
            }} theme={theme}/>
        </Div>
    )
}

const Div = styled.div`
    width:50px;
    height: 25px;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 25px;
    background-color: #c5e6f1;
    box-shadow: 0 1px 2px #0000005d;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .btn{
        z-index: 1;
        background-color: ${theme.background};
        transform: translateX(0);
        width:18px;
        height: 18px;
        border-radius: 50%;
        margin: 0 4px;
        box-shadow: 0 0 3px #ffff00;
        border: 2px solid #fff;
        cursor: pointer;
        transition: 0.3s ease-in-out;
}
`