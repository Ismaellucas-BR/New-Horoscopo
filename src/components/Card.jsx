// /components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ card }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <img src={card.image} alt={card.title} style={{ width: '150px', height: '150px' }} />
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <Link to={`/card/${card.id}`}>Ver Horóscopo</Link>
    </div>
  );
}

export default Card;
