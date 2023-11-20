// En tu componente React
import React, { useState, useEffect } from 'react';

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nodejsapi-6i4z.onrender.com/cities');
  
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
  
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Lista de Ciudades</h1>
      <ul>
        {cities.map(city => (
          <li key={city.name}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
