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



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function gameLogic() {
    const selectedCard = []
    const addSelectedCard = (cardId) => {
        selectedCard.push(cardId)
    }
    const resetSelectedCards = () => {
        selectedCard.length = 0
    }
    const isCardSelected = (cardId) => {
        return selectedCard.includes(cardId)
    }
    return {
        addSelectedCard,
        resetSelectedCards,
        isCardSelected
    }
}
export { getCardsData, shuffleArray, gameLogic };