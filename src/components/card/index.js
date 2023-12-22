import { useState, useEffect } from 'react';
import styled from 'styled-components';

import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

export const Pokemon = () => {
    const { theme } = useContext(ThemeContext)

    
    async function getPokemon(){
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
        const responseJson = await response.json()
        return{
            nome: responseJson.species.name,
            image: responseJson.sprites.front_default,
            moves: responseJson.moves,
            abilities: responseJson.abilities,
            type: responseJson.types
        }
    };

    const [pokemon, setPokemon] = useState({
        data: []
    })

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await getPokemon();

            setPokemon({
                data: data
            })            
        }
        fetchData()
    },[])
    console.log(pokemon);
}

const Ul = styled.ul`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
    max-width: 1170px;

`

const Li = styled.li`
    list-style: none;
    margin: 10px;
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.color};
    text-align: center;
    text-transform: capitalize;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 3px 5px ${(props)=> props.theme.color}5d;
    cursor: pointer;
    width: 160px;
    transition: 0.4s ease-in-out;
`
const H2 = styled.h2`
    font-size: 20px;
`
const Btn = styled.button`
    border: none;
    margin: 0 0 50px;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.btn.background};
    color: ${(props) => props.theme.btn.color};
    background-color: ;
    font-weight: 500;
    border: 1px solid #ffff;
    box-shadow: 0 2px 5px #aae6ec;
    cursor: pointer;
    font-size: 16px;
    transition: 0.4s ease-in-out;
`