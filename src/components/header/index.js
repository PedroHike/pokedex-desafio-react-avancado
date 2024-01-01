import styled from "styled-components"
import { ThemeTogglerButton } from "../theme-toggler-button"

export const Header = ()=>{

    

    return(
        <>
            <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png'/>
            <ThemeTogglerButton/>
        </>
    )
}

const Img = styled.img`
    width: 400px;
    margin: auto;
    padding: 30px;
    display: block;
`

