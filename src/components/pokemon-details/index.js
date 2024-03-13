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
import { Header } from '../header';

export const PokemonDetails = () => {
    const { theme, types } = useContext(ThemeContext)
    
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
    },[id])


    return(
        <Container theme={theme}>
                <Link to='/'>
                    <Icon className="fas fa-arrow-circle-left" theme={theme}></Icon>
                </Link>
            <Header/>
            <Card theme={theme}>
                <ImageContainer>
                    <Img src={info.data.image}/>
                </ImageContainer>
                <Infos>
                    <Name>{info.data.name}</Name>
                    <Ul>
                        {
                            info.data.type.map((type, index)=>{
                                return(
                                    
                                    <Type key={index} theme={types}>{type}</Type>
                                    
                                )
                            })
                        }
                    </Ul>
                    
                        <Title>Abilities </Title>
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
            
                        <Title>Moves</Title>
                        <Ul>
                            {
                                info.data.moves.map((moves, index)=>{
                                    return(
                                        
                                        <Li key={index}><p>{moves}</p></Li>
                                    )
                                })
                            }
                        </Ul>
                    
                </Infos>
                
            </Card>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${(props) => props.theme.mainBg};
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s ease-in-out;
    @media (max-width: 450px){
        
    }
`

const Card = styled.div`
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.color};
    padding: 15px;
    border-radius: 25px;
    box-shadow: 0 3px 5px ${(props)=> props.theme.color}5d;
    display: flex;
    align-items: center;
    transition: 0.3s ease-in-out;
    margin-top: 50px;
    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        margin: 0 0 30px;
    }

    @media (max-width: 460px){
        transform: scale(0.8)
    }

`

const Icon = styled.i`
    color:#706c6c;
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 30px;
    transition: 0.3s ease-in-out;
    z-index: 1;

`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgb(149, 149, 149);
    background-color: #e0e0e0;
    width: 350px;
    height: 350px;
    margin-right: 20px;
    @media (max-width: 768px){
        margin: 0;
        width: 300px;
        height: 300px;
    }
`

const Img = styled.img`
    object-fit: cover;
    max-width: 80%;
    max-height: 90%;
`

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Name = styled.h2`
    font-size: 30px;
    text-transform: capitalize;
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 320px;
    margin-bottom: 15px;
`

const Type = styled.li`
    padding: 5px 20px;
    list-style: none;
    border-radius: 25px;
    background-color: ${(props)=> props.theme[props.children]};
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
    font-size: 16px;
    margin: 0 5px;
    transition: 0.3s ease-in-out;
`

const Title = styled.h2`
    font-size: 20px;
    text-transform: capitalize;
    align-self: flex-start;
`

const Li = styled.li`
    list-style: none;

    h4{
        text-transform: capitalize;
    }

    p{
        color:#706c6c;
        font-size: 13px;
        margin-right: 10px;
    }
`
