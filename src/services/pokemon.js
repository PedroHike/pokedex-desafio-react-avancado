import { baseUrl } from "../components/variables";

export async function getPokemon(pokemon){
        
    const response = await fetch(`${baseUrl}/bulbasaur`)
    return await response.json()

}
