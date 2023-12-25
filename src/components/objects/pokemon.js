export let pokemon = {
    image: '',
    animatedImage : '',
    name : '',
    moves: [],
    abilities: [],
    type: [],

    setInfo(response){
        this.animatedImage = response.sprites.versions["generation-v"]["black-white"].animated.front_default
        this.image = response.sprites.other.dream_world.front_default
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