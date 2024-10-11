import React, { useState } from 'react';

// Pega diretamente a variável de ambiente como string
const API_KEY = "f711fcaa-58f4-48b9-ae2e-d8d72baab6c8";

function Api() {
  const [horoscope, setHoroscope] = useState('');
  const [sign, setSign] = useState('aries');

  const getHoroscope = () => {
    console.log(API_KEY);  // Verifica se está imprimindo a chave da API
    const url = `https://api.apiverve.com/v1/horoscope?sign=${sign}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`, // Usando a chave da API
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
  getHoroscope()
  return (
    <div>
      <h1>Horóscopo do Dia</h1>
      <select value={sign} onChange={(e) => setSign(e.target.options[e.target.selectedIndex].text)}>
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
        <h2>Horóscopo para {sign.charAt(0).toUpperCase() + sign.slice(1)}:</h2>
        <p>{horoscope}</p>
      </div>
    </div>
  );
}

export default Api;
