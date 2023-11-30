import styled from "styled-components"
import React, { useContext } from "react"
import { ThemeContext, themes} from '../../contexts/theme-context'

export const Header = ()=>{


    // console.log(themes);
    

    return(
        <>
            <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png'/>

            <Div>
                <Btn>
                </Btn>
            </Div>
        </>
    )
}

const Img = styled.img`
    width: 300px;
    margin: 30px;
`

const Div = styled.div`
    width:50px;
    height: 25px;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 25px;
    box-shadow: 0 1px 2px #0000005d;
    display: flex;
    flex-direction: column;
    justify-content: center;


`

const Btn = styled.button`
    z-index: 1;
    background-color: theme.background;
    width:18px;
    height: 18px;
    border-radius: 50%;
    margin: 0 4px;
    box-shadow: theme.boxShadow;
    border: theme.border;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    transform: theme.transform
`

