import pokemon from "./pokemonData.js";
async function getCardsData() {
    const cards = [];
    for (let i = 1; i <= 50; i++) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const pokemonData = pokemon()
            pokemonData.setPokemonId(data.id)
            pokemonData.setPokemonName(data.name)
            pokemonData.setPokemonPicture(data.sprites.front_default)
            cards.push(pokemonData)
        } catch (error) {
            console.error('Error fetching card data:', error)
        }
    }
    return cards
}
getCardsData().then(pokemon => console.log(pokemon.map(p => p.getPokemonName())));  