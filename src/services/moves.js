import { baseUrl } from "../components/variables";

export async function getMoves(pokemon){
        
    const response = await fetch(`${baseUrl}/${pokemon}`)
    const array = await (await response.json()).moves

    const moves = array.map((move)=>{
        return move.move.name
    })

    return moves.slice(0, 10)

}