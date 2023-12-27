import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

export const CardsList = () => {
    const { theme } = useContext(ThemeContext)

    
    async function getPokemons(){
    
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`)
        const responseJson = await response.json()

        
        const pokemonData = await Promise.all(
            responseJson.results.map(async (infos)=>{
                const dataResponse = await (await fetch(infos.url)).json()
            
            return{
                name: infos.name,
                image: dataResponse.sprites.versions["generation-v"]["black-white"].animated.front_default
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
                            <StyledLink to = {`/pokemon/${pokemon.name}`} key={index} >
                                <Card theme={theme}>
                                    <DivImg>
                                        <img src={pokemon.image}/>
                                    </DivImg>
                                    <Name>{pokemon.name}</Name>
                                    <Subtitle>_ _ __</Subtitle>
                                    <Subtitle>__ _ _</Subtitle>
                                    <Subtitle>_ ___ _ ___</Subtitle>
                                </Card>
                            </StyledLink>
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
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
    max-width: 1170px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`
const DivImg = styled.div`
    background-color: #e0e0e0;
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
`

const Card = styled.li`
    list-style: none;  
    margin: 5px;
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.color};
    text-transform: capitalize;
    padding: 5px 5px 15px;
    border-radius: 10px;
    box-shadow: 0 3px 5px ${(props)=> props.theme.color}5d;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    gap: 10px;
    border: 3px solid ${(props) => props.theme.color};
    text-align: center;
`

const Name = styled.h2`
    font-size: 14px;
    margin: 10px
`

const Subtitle = styled.p`
    text-align: start;
    margin-left: 15px;
    line-height: 6px;
    font-weight: 300;    
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