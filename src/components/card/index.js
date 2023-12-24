import { useState, useEffect } from 'react';
import styled from 'styled-components';

import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

import { getPokemon } from '../../services/pokemon';
import { getMoves } from '../../services/moves';
import { getAbilities } from '../../services/abilities';
import { getTypes } from '../../services/type';

import { pokemon } from '../objects/pokemon';

const pokemonResponse = await getPokemon()
const movesResponse = await getMoves()
const abilitiesResponse = await getAbilities()
const typesResponse = await getTypes()


pokemon.setInfo(pokemonResponse)
pokemon.setMoves(movesResponse)
pokemon.setAbilities(abilitiesResponse)
pokemon.setType(typesResponse)




export const Pokemon = () => {
    const { theme } = useContext(ThemeContext)


    const [info, setInfo] = useState({
        data: pokemon
    })

    useEffect(()=>{
        const fetchData = async ()=>{
            setInfo({
                data: pokemon
                })
        }
        fetchData()
    },[])


    return(
        <Body>
            <Card theme={theme}>
                <Image>
                    <Img src={info.data.image}/>
                </Image>
                <H2>{info.data.name}</H2>
                <H3>Tipo</H3>
                <Ul>
                    {
                        info.data.type.map((type, index)=>{
                            return(
                                
                                <Li key={index}>{type}</Li>
                            )
                        })
                    }
                </Ul>
                
                <H3>Habilidades</H3>
                <Ul>
                    {
                        info.data.abilities.map((abilities, index)=>{
                            return(
                                
                                <Li key={index}>{abilities}</Li>
                            )
                        })
                    }
                </Ul>
    
                <H3>Movimentos</H3>
                <Ul>
                    {
                        info.data.moves.map((moves, index)=>{
                            return(
                                
                                <Li key={index}>{moves}</Li>
                            )
                        })
                    }
                </Ul>
                
            </Card>
        </Body>
    )
}

const Image = styled.div`
    max-width: 200px;
    max-height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    
`

const Img = styled.img`
    min-width: 200%;
    object-fit: cover;
`


const Body = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`

const Ul = styled.ul`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1170px;

`

const Card = styled.li`
    list-style: none;
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.color};
    text-align: center;
    text-transform: capitalize;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 3px 5px ${(props)=> props.theme.color}5d;
    max-width: 700px;
    transition: 0.4s ease-in-out;
    margin: auto;
`
const H2 = styled.h2`
    font-size: 20px;
`
const H3 = styled.h2`
    font-size: 16px;
    margin-top: 10px;
`

const Li = styled.li`
    list-style: none;
    margin: 0 10px;
`
