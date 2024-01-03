import React, { useContext, useState, useEffect } from "react"
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme-context'

import { DefaultList } from "../../services/default-list";
import { HandleSelectChange } from "../../services/filtered-pokemons";
import { quantity } from "../variables";

export const CardsList = () => {
    const { theme } = useContext(ThemeContext)

    
    const [limit, setLimit] = useState(quantity)
    const [selectedType, setSelectedType] = useState('default');
    const [list, setList] = useState({
        cards: []
    })


    useEffect(()=>{
        const fetchData = async ()=>{
            const allPokemons = await DefaultList(limit);
            const typePokemon = await HandleSelectChange(selectedType, limit)
            let data = []

            selectedType==='default' ? data = allPokemons : data = typePokemon
            
            setList({
                cards: data
            })            
            
        }
        fetchData()
    },[limit, selectedType])

    return(
        <div>
            <Label htmlFor='Type' theme= {theme}>Select type</Label>
            <Select theme= {theme} onChange={(e)=>{setSelectedType(e.target.value);}}>
                <option value={'default'}>Default</option>
                <option value={'normal'}>Normal</option>
                <option value={'fire'}>Fire</option>
                <option value={'water'}>Water</option>
                <option value={'electric'}>Electric</option>
                <option value={'grass'}>Grass</option>
                <option value={'ice'}>Ice</option>
                <option value={'fighting'}>Fighting</option>
                <option value={'poison'}>Poison</option>
                <option value={'ground'}>Ground</option>
                <option value={'flying'}>Flying</option>
                <option value={'psychic'}>Psychic</option>
                <option value={'bug'}>Bug</option>
                <option value={'rock'}>Rock</option>
                <option value={'ghost'}>Ghost</option>
                <option value={'dragon'}>Dragon</option>
                <option value={'dark'}>Dark</option>
                <option value={'steel'}>Steel</option>
                <option value={'fairy'}>Fairy</option>
            </Select>
            <Ul>
                {
                    list.cards.map((pokemon, index)=>{
                        return(
                            <Link to = {`/pokemon/${pokemon.name}`} key={index} >
                                <Card theme={theme}>
                                    <ImgContainer>
                                        <img src={pokemon.image} alt='pokemon'/>
                                    </ImgContainer>
                                    <Name>{pokemon.name}</Name>
                                    <Subtitle>__ _ ___ _ _____ _ _ __ __ _ __ _ ___ ____ _ __ _ __ __ _ ___ __ _ _ _ __ __</Subtitle>
                                </Card>
                            </Link>
                        )
                    })
                }
            </Ul>

            <Btn onClick={()=>{
                setLimit(limit+10)
            }} theme={theme}> Carregar mais</Btn>

        </div>
    )
}

const Label = styled.label`
    color: ${(props) => props.theme.color};
    font-weight: 600;
    transition: 0.4s ease-in-out;
    @media (max-width: 450px){
        font-size: 14px;
    }
`

const Select = styled.select`
    margin: 10px;
    padding: 3px 10px;
    border-radius: 10px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.cardBg};
    transition: 0.4s ease-in-out;
    @media (max-width: 450px){
        font-size: 12px;
    }
`

const Ul = styled.ul`
    margin: 30px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 750px;
    @media (max-width: 450px){
        padding: 15px;
        margin: 15px auto;
    }
`

const Card = styled.li`
    list-style: none;  
    margin: 5px;
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.color};
    text-transform: capitalize;
    padding: 5px 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: 0 1px 5px ${(props)=> props.theme.color}80;
    gap: 10px;
    text-align: center;
    &:hover{
        transform: scale(1.1);
        box-shadow: 0 5px 7px ${(props)=> props.theme.color}9c;
    }
`

const ImgContainer = styled.div`
    background-color: #e0e0e0;
    width: 110px;
    height: 110px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    border: 2px solid rgb(149, 149, 149);
    @media (max-width: 450px){
        width: 70px;
        height: 70px;
        & img{
            width: 80%;
        }
    }
`

const Name = styled.h2`
    font-size: 16px;
    margin-top: 10px;
    @media (max-width: 768px){  
        font-size: 12px;
        width: 70px;
    }

`

const Subtitle = styled.p`
    text-align: start;
    padding: 5px 5px 0;
    font-size: 16px;
    font-weight: 200;
    line-height: 5px;
    max-width: 110px;
    @media (max-width: 450px){
        max-width: 70px;
        font-size: 10px;
    }
`

const Btn = styled.button`
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.btn.background};
    color: ${(props) => props.theme.btn.color};
    font-weight: 500;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s ease-in-out;
    margin-bottom: 30px;
    &:hover{
        transform: scale(1.03);
        box-shadow: 0 2px 5px ${(props) => props.theme.color};
    }
`