import styled from "styled-components"
import React, { useContext } from "react"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import { ThemeContext, themes} from '../../contexts/theme-context'

export const Header = ()=>{

    

    return(
        <>
            <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png'/>
            <ThemeTogglerButton/>
        </>
    )
}

const Img = styled.img`
    width: 300px;
    margin: 30px;
`

