import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <h1>Memory Card Game</h1>
    <div className='info'>
      <p>Try to select a card be sure to not click on the same card twice!</p>
      <p>Click on a card to start the game.</p>
    </div>
    <div className="gameboard">
      <div className='scoreboard'>
        <p>Score: 0</p>
        <p>High Score: 0</p>
      </div>
    </div>
    </>
  )
}

export default App
