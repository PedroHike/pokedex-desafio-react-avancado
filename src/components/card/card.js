import { useState, useEffect } from 'react';

import styled from 'styled-components';

async function getPokemons(){
    let data = [];
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const responseJson = await response.json()

    const pokemonData = await Promise.all(
    responseJson.results.map(async (infos)=>{
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

export const CardsList = () => {
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
    },[])

    return(
        <Ul>
            {
                list.cards.map((pokemon, index)=>{
                    return(
                        <Li key={index}>
                            <img src={pokemon.image}/>
                            <H2>{pokemon.nome}</H2>
                        </Li>
                    )
                })
            }
        </Ul>
    )
}

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;

`

const Li = styled.li`
    list-style: none;
    margin: 10px;
    background-color: #ffff;
    text-align: center;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 3px 5px #0000005d;
    cursor: pointer;
    width: 160px;
`
const H2 = styled.h2`
    font-size: 20px;
`
