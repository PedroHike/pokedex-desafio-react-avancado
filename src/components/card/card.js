import { useState, useEffect } from 'react';

import styled from 'styled-components';

async function getPokemons(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    return await response.json()
};

export const CardsList = () => {
    const [list, setList] = useState({
        cards: []
    })

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await getPokemons();

            setList({
                cards: data.results
            })
            
        }
        fetchData()
    },[])

    return(
        <Ul>
            {
                
                list.cards.map((card, index)=>{
                    return(
                        <Li key={index}>
                            <img src='/'/>
                            <h2>{card.name}</h2>
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
    width: 200px;
`

/*{
        const fetchData = async ()=>{
            const data = await getPokemons();
            const cards = data.results
            return (
                <ul>
                    {
                        cards.map((card, index)=>{
                            return(
                                <Li key={index}>
                                    <img src='/'/>
                                    <h2>{card.name}</h2>
                                </Li>
                            )
                        })
                        
                    }
                </ul>
            )
        }
        fetchData()
    }*/