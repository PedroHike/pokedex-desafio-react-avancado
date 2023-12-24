import { baseUrl } from "../components/variables";

export async function getAbilities(pokemon){
        
    const response = await fetch(`${baseUrl}/bulbasaur`)
    const array = await (await response.json()).abilities

    const abilities = array.map((ability)=>{
        return ability.ability.name
    })

    return abilities

}