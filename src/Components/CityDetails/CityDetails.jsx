

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
  const { cityName } = useParams();
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://nodejsapi-6i4z.onrender.com/cities/${cityName}`);

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
      }
    };

    fetchData();
  }, [cityName]);

  return (
    <div>
      <h1>Atracciones de {cityName}</h1>
      <ul>
        {attractions.map(attraction => (
          <li key={attraction.name}>{attraction.name} = {attraction.description}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default CityDetails;
