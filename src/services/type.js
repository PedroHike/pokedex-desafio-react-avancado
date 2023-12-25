import { baseUrl } from "../components/variables";

export async function getTypes(pokemon){
        
    const response = await fetch(`${baseUrl}/${pokemon}`)
    const array = await (await response.json()).types

    const types = array.map((type)=>{
        return type.type.name
    })

    return types

}