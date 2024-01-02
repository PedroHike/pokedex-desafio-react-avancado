export const DefaultList = async(quantity)=>{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`)
    const responseJson = await response.json()

    
    const pokemonData = await Promise.all(
        responseJson.results.map(async (infos)=>{
            const dataResponse = await (await fetch(infos.url)).json()
            return{
                name: infos.name,
                image: dataResponse.sprites.versions["generation-v"]["black-white"].animated.front_default
            };
        })
    );
    return pokemonData
}