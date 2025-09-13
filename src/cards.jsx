import { useState } from 'react'


function Cards({ card, handleCardClick }) {
  return (
    <div className="card" onClick={() => handleCardClick(card.id)}>
      <img src={card.image} alt={card.name} />
      <p>{card.name}</p>
    </div>
  )
}