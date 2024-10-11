// /pages/CardDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../../data/signos.json'; // Importa os dados dos signos

function CardDetail() {
  const { id } = useParams(); // Pega o id do signo pela URL
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(true);

  // Encontra o signo no JSON com base no id da URL
  const selectedSign = cardData.find((sign) => sign.id === id);

  useEffect(() => {
    // Função para buscar o horóscopo do signo
    const fetchHoroscope = async () => {
      try {
        const response = await fetch(`https://api.apiverve.com/v1/horoscope?sign=${id}`, {
          headers: {
            'Authorization': `Bearer f711fcaa-58f4-48b9-ae2e-d8d72baab6c8`, // Chave da API
          },
        });
        const data = await response.json();
        setHoroscope(data.data.horoscope || 'Horóscopo não disponível.');
      } catch (error) {
        console.error('Erro ao buscar horóscopo:', error);
        setHoroscope('Não foi possível obter o horóscopo.');
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {/* Exibe o nome do signo em vez do id */}
      <h1>Horóscopo de {selectedSign ? selectedSign.nome : 'Signo Desconhecido'}</h1>
      <p>{horoscope}</p>
    </div>
  );
}

export default CardDetail;
