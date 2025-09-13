function pokemon() {
    let pokemonId = "";
    let pokemonName = "";
    let pokemonPicture = "";

    const getPokemonName = () => pokemonName
    const getPokemonId = () => pokemonId
    const getPokemonPicture = () => pokemonPicture

    const setPokemonName = (name) => {
        pokemonName = name
    }
    const setPokemonId = (id) => {
        pokemonId = id
    }
    const setPokemonPicture = (picture) => {
        pokemonPicture = picture
    }

    return {
        getPokemonName,
        getPokemonId,
        getPokemonPicture,
        setPokemonName,
        setPokemonId,
        setPokemonPicture
    }
}

export default pokemon;