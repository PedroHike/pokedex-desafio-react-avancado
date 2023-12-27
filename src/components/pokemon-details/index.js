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
        <Container theme={theme}>
            <Card theme={theme}>
                <Link to='/'>
                    <Icon className="fas fa-arrow-circle-left" theme={theme}></Icon>
                </Link>
                <Image>
                    <Img src={info.data.image}/>
                </Image>
                <div>
                    <Name>{info.data.name}</Name>
                    <Ul>
                        {
                            info.data.type.map((type, index)=>{
                                return(
                                    
                                    <Type key={index} theme={theme}>{type}</Type>
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
                </div>
                
            </Card>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${(props) => props.theme.mainBg};
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.color};
    text-align: center;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 3px 5px ${(props)=> props.theme.color}5d;
    transition: 0.4s ease-in-out;
    display: flex;
`

const Icon = styled.i`
    color: ${(props)=> props.theme.color};
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 30px;
`

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgb(149, 149, 149);
    background-color: #e0e0e0;
    width: 400px;
    height: 350px;
`

const Img = styled.img`
    object-fit: cover;
    width: 80%;
`

const Name = styled.h2`
    font-size: 40px;
    text-transform: capitalize;
`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 400px;
`
const Type = styled.li`
    padding: 5px 20px;
    list-style: none;
    border-radius: 25px;
    background-color: ${(props)=> props.theme.type.{type}};
    text-transform: capitalize;x'
    font-weight: 600;
    color: #ffff;
    margin: 5px;
`

const H3 = styled.h2`
    font-size: 16px;
    margin-top: 10px;
    text-transform: capitalize;
`

const Li = styled.li`
    list-style: none;
    margin: 0 10px;
`
