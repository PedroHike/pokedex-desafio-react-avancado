import { quantity } from "../components/variables"

export const HandleSelectChange = async(event) => {
    const selectedOption = event.target.value

    const response = await(await fetch(`https://pokeapi.co/api/v2/type/${selectedOption}`)).json()

    const pokemonList = response.pokemon.slice(0, quantity).map(async (infos)=>{
            const data = await fetch(infos.pokemon.url)
            const response = await data.json()

            console.log({
                name: infos.pokemon.name,
                image: response.sprites.versions["generation-v"]["black-white"].animated.front_default
            });

            return{
                name: infos.pokemon.name,
                image: response.sprites.versions["generation-v"]["black-white"].animated.front_default
            };
        })
    return pokemonList
}