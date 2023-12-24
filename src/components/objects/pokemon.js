export let pokemon = {
    image : '',
    name : '',
    moves: [],
    abilities: [],
    type: [],

    setInfo(response){
        this.image = response.sprites.front_default
        this.name = response.name
    },

    setMoves(response){
        this.moves = response
    },

    setType(response){
        this.type = response
    },

    setAbilities(response){
        this.abilities = response
    }
}