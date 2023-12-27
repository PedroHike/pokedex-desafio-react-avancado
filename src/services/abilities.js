import { baseUrl } from "../components/variables";

export async function getAbilities(pokemon){
        
    const response = await fetch(`${baseUrl}/${pokemon}`)
    const arrayAbility = await (await response.json()).abilities
    
    const infosAbility = await Promise.all(

        arrayAbility.map(async (ability)=>{
            const abilityDetail = await (await fetch(ability.ability.url)).json()

            const description = abilityDetail.effect_entries.filter((description)=>{
                return description.language.name === 'en'
            })
            
            return {
                name: abilityDetail.name,
                description: description[0].short_effect
            }
        })
        
        )
    return infosAbility

}
