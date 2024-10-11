// /pages/Home.js
import React from 'react';
import cardData from '../../data/signos.json'; // Importa os dados do JSON
import Card from '../components/Card';

function Home() {
  return (
    <div>
      <h1>Escolha um Signo</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
