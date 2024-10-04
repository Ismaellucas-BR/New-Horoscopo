import React, { useState } from 'react';

function Api() {
  const [horoscope, setHoroscope] = useState('');
  const [sign, setSign] = useState('aries');

  const getHoroscope = () => {
    const url = `https://api.apiverve.com/v1/horoscope?sign=${sign}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, // Chave da API
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setHoroscope(data.data.horoscope || 'Horóscopo não encontrado.');
      })
      .catch((error) => {
        console.error('Erro:', error);
        setHoroscope('Não foi possível obter o horóscopo. Tente novamente mais tarde.');
      });
  };

  return (
    <div>
      <h1>Horóscopo do Dia</h1>
      <select value={sign} onChange={(e) => setSign(e.target.value)}>
        <option value="aries">Áries</option>
        <option value="taurus">Touro</option>
        <option value="gemini">Gêmeos</option>
        <option value="cancer">Câncer</option>
        <option value="leo">Leão</option>
        <option value="virgo">Virgem</option>
        <option value="libra">Libra</option>
        <option value="scorpio">Escorpião</option>
        <option value="sagittarius">Sagitário</option>
        <option value="capricorn">Capricórnio</option>
        <option value="aquarius">Aquário</option>
        <option value="pisces">Peixes</option>
      </select>
      <button onClick={getHoroscope}>Ver Horóscopo</button>

      <div id="horoscopeResult" style={{ marginTop: '20px', color: 'white' }}>
        <h2>Horóscopoo para {sign.charAt(0).toUpperCase() + sign.slice(1)}:</h2>
        <p>{horoscope}</p>
      </div>
    </div>
  );
}

export default Api;
