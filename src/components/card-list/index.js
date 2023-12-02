import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const CardsList = () => {
    
    async function getPokemons(){
    
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`)
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
                            <Li key={index}>
                                <img src={pokemon.image}/>
                                <H2>{pokemon.nome}</H2>
                            </Li>
                        )
                    })
                }
            </Ul>

            <Btn onClick={()=>{
                setQuantity(quantity+10)
            }}> Carregar mais Pokemons</Btn>

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
    max-width: 970px;

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
const Btn = styled.button`
    border: none;
    margin: 0 0 50px;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: #D2E3C8;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 500;
    box-shadow: 0 2px 5px #86A789;
    cursor: pointer;
    font-size: 20px;
`