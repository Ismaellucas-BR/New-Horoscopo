// /pages/CardList.js
import React from 'react';
import { Link } from 'react-router-dom';
import cardData from '../../data/signos.json';

const CardList = () => {
  return (
    <div>
      <h1>Lista de Signos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cardData.map((card) => (
          <div key={card.id} style={{ border: '1px solid #ccc', padding: '10px', width: '150px' }}>
            <h2>{card.nome}</h2>
            {/* Carrega as imagens dinamicamente a partir do JSON */}
            <img src={require(`../../assets/${card.id}.jpg`)} alt={card.nome} style={{ width: '100px', height: '100px' }} />
            <Link to={`/card/${card.id}`}>Ver Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
