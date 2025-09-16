import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './cards.jsx'
import { getCardsData, shuffleArray, gameLogic } from './game.js'
import './App.css'


function App() {
  const pokemons = getPokemons();
  const [visible, setVisible] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCard, setSelectedCard] = useState([]);


 useEffect(() => {
    if (pokemons.length) setVisible(getRandomCards(pokemons));
  }, [pokemons]); // to start with a random 10 when pokemons are loaded

  const reshuffle = () => setVisible(getRandomCards(pokemons));
  const onCardClick = (e) => {
    reshuffle();
    if (isCardSelected(e.currentTarget.id, selectedCard)) {
      wrongGuess(setScore, setSelectedCard);
      return;
    }
    correctGuess(setScore, setBestScore, score, bestScore);
    setSelectedCard([...selectedCard, e.currentTarget.id]);
}

  return (
    <>
      <h1>Memory Card Game</h1>
      <ScoreBoard score={score} bestScore={bestScore} />
      <button onClick={reshuffle}>New Random 10</button>
     <CardList cards={visible} onCardClick={onCardClick} />
    </>
  );
}

function getPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getCardsData().then(all => setPokemons(all));
  }, []);

  return pokemons;
}

function getRandomCards(array, count = 10) {
  return shuffleArray(array).slice(0, count);
}

function CardList({ cards, onCardClick }) {
  return (
    <div className="cards">
      {cards.map(p => (
        <Cards
          key={p.getPokemonId()}
          id={p.getPokemonId()}
          name={p.getPokemonName()}
          picture={p.getPokemonPicture()}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}
function ScoreBoard({ score, bestScore }) {
  return (
    <div className="score-board">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}
function isCardSelected(cardId, selectedCard) {
  console.log(cardId)
  return selectedCard.includes(cardId);
}
function correctGuess(setScore, setBestScore, score, bestScore) {
    setScore(score + 1);
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
} 
function wrongGuess(setScore, setSelectedCard) {
    setScore(0);
    setSelectedCard([]);
}




export default App
