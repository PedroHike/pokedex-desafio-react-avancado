import styled from "styled-components"
import React, { useContext } from "react"
import { ThemeContext, themes } from '../../contexts/theme-context'
import { Button } from "../button"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    return(
        <Div theme={theme} onClick={()=>{
            setTheme(theme === themes.light ? themes.dark : themes.light);
        }}>
            <Button />
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
    background-color: ${(props) => props.theme.togglerBg};
    box-shadow: ${(props) => props.theme.skyBoxShadow};
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    & .btn{
        z-index: 1;
        background-color: ${(props) => props.theme.bgTheme};
        transform: ${(props) => props.theme.transform};
        width:18px;
        height: 18px;
        border-radius: 50%;
        margin: 0 4px;
        box-shadow: ${(props) => props.theme.boxShadow};
        border: ${(props) => props.theme.border};
        transition: 0.4s ease-in-out;
        cursor: pointer;
        
}
`