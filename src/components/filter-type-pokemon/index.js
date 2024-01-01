import styled from "styled-components"

import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

export const FilterType = ()=>{
    
    const { theme } = useContext(ThemeContext)

    return(
        <>
            <Label htmlFor='Type' theme= {theme}>Select type</Label>
            <Select theme= {theme}>
                <option value={'Default'}>Default</option>
                <option value={'Normal'}>Normal</option>
                <option value={'Fire'}>Fire</option>
                <option value={'Water'}>Water</option>
                <option value={'Electric'}>Electric</option>
                <option value={'Grass'}>Grass</option>
                <option value={'Ice'}>Ice</option>
                <option value={'Fighting'}>Fighting</option>
                <option value={'Poison'}>Poison</option>
                <option value={'Ground'}>Ground</option>
                <option value={'Flying'}>Flying</option>
                <option value={'Psychc'}>Psychc</option>
                <option value={'Bug'}>Bug</option>
                <option value={'Rock'}>Rock</option>
                <option value={'Ghost'}>Ghost</option>
                <option value={'Dragon'}>Dragon</option>
                <option value={'Dark'}>Dark</option>
                <option value={'Steel'}>Steel</option>
                <option value={'Fairy'}>Fairy</option>
                <option value={'Unknown'}>Unknown</option>
                <option value={'Shadow'}>Shadow</option>
            </Select>
        </>
    )
}


const Label = styled.label`
    color: ${(props) => props.theme.color};
    font-weight: 600;
    transition: 0.4s ease-in-out;
`

const Select = styled.select`
    margin-left: 10px;
    padding: 3px 10px;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.cardBg};
    transition: 0.4s ease-in-out;
`