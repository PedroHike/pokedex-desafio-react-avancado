import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import React, { useContext } from "react"
import { ThemeContext } from '../../contexts/theme-context'

import { getPokemon } from '../../services/pokemon';
import { getMoves } from '../../services/moves';
import { getAbilities } from '../../services/abilities';
import { getTypes } from '../../services/type';

import { pokemon } from '../objects/pokemon';


export const PokemonDetails = () => {
    const { theme } = useContext(ThemeContext)
    
    const {id} = useParams()
    
    const [info, setInfo] = useState({
        data: pokemon
    })
    
    useEffect(()=>{
        const fetchData = async ()=>{

            const pokemonResponse = await getPokemon(id)
            const movesResponse = await getMoves(id)
            const abilitiesResponse = await getAbilities(id)
            const typesResponse = await getTypes(id)
            
            pokemon.setInfo(pokemonResponse)
            pokemon.setMoves(movesResponse)
            pokemon.setAbilities(abilitiesResponse)
            pokemon.setType(typesResponse)

            setInfo({
                data: pokemon
                })
        }
        fetchData()
    },[])


    return(
        <Body>
            <StyledLink to='/'>Voltar para Home</StyledLink>
            <Card theme={theme}>
                <Image>
                    <Img src={info.data.image}/>
                </Image>
                <H2>{info.data.name}</H2>
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
                                
                                <Li key={index}>
                                    <h4>{abilities.name}</h4>
                                    <p>{abilities.description}</p>
                                
                                </Li>
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

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    color: #000;
`


const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    
`

const Img = styled.img`
    object-fit: cover;
`


const Body = styled.div`
    height: 100vh;
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
