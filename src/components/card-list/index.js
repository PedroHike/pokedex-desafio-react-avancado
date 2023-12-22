import { useState, useEffect } from 'react';
import styled from 'styled-components';

import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

export const CardsList = () => {
    const { theme } = useContext(ThemeContext)

    
    async function getPokemons(){
    
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`)
        const responseJson = await response.json()
    
        const pokemonData = await Promise.all(
        responseJson.results.map(async (infos)=>{
            console.log(infos);
            const dataResponse = await (await fetch(infos.url)).json()
            
            return{
                nome: infos.name,
                image: dataResponse.sprites.front_default,
                moves: dataResponse.moves,
                abilities: dataResponse.abilities,
                type: dataResponse.types
            };
        })
    
        );
        return pokemonData
    };

    const [quantity, setQuantity] = useState(10)

    const [list, setList] = useState({
        cards: []
    })

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await getPokemons();

            setList({
                cards: data
            })            
        }
        fetchData()
    },[quantity])

    return(
        <>
            <Ul>
                {
                    list.cards.map((pokemon, index)=>{
                        return(
                            <Li key={index} theme={theme} onClick={()=>{
                                console.log(`clicou em ${pokemon.nome}`)
                            }}>
                                <img src={pokemon.image}/>
                                <H2>{pokemon.nome}</H2>
                            </Li>
                        )
                    })
                }
            </Ul>

            <Btn onClick={()=>{
                setQuantity(quantity+10)
            }} theme={theme}> Carregar mais</Btn>

        </>
    )
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