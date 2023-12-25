import { baseUrl } from "../components/variables";

export async function getPokemon(pokemon){
        
    const response = await (await fetch(`${baseUrl}/${pokemon}`)).json()

    return response
        
}