export const HandleSelectChange = async(type, quantity) => {
    if(type==='default'){
        return
    }else{
        const response = await(await fetch(`https://pokeapi.co/api/v2/type/${type}`)).json()
    
        const pokemonList = await Promise.all(
            response.pokemon.slice(0, quantity).map(async (infos)=>{
                const data = await fetch(infos.pokemon.url)
                const response = await data.json()
            
                return{
                    name: infos.pokemon.name,
                    image: response.sprites.versions["generation-v"]["black-white"].animated.front_default
                };
            })
    
        );
        return pokemonList
        
    }
}