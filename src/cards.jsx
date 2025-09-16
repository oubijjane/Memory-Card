import { useState } from 'react'



function Card({ name, id, picture, onClick }) {
  return (
    <div className="card" id={id} onClick={onClick}>
      <img src={picture} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Card
