import styled from "styled-components"
import { Header } from "../header"
import { CardsList } from "../card-list"

import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

export const Body = ()=>{
    const { theme } = useContext(ThemeContext)

    return(
        <StyledBody theme={theme}>
            <Header/>
            <CardsList/>
        </StyledBody>
    )
    
}

const StyledBody = styled.body`
    transition: 0.4s ease-in-out;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.background};
`
