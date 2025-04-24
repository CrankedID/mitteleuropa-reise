'use client';

import { useEffect, useState } from 'react';

export default function WetterWidget({ city }) {
  const [wetter, setWetter] = useState(null);

  useEffect(() => {
    const fetchWetter = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=de`
        );
        const data = await res.json();
        setWetter(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Wetterdaten:', error);
      }
    };

    fetchWetter();
  }, [city]);

  if (!wetter || wetter.cod !== 200) {
    return <p className="text-sm text-gray-500">Wetterdaten werden geladen...</p>;
  }

  return (
    <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 shadow">
      <h3 className="text-lg font-semibold mb-2">🌤️ Wetter in {wetter.name}</h3>
      <p className="text-gray-800">🌡️ {wetter.main.temp.toFixed(1)} °C</p>
      <p className="text-gray-800">💧 Luftfeuchtigkeit: {wetter.main.humidity}%</p>
      <p className="text-gray-800">🌬️ Wind: {wetter.wind.speed} km/h</p>
      <p className="text-gray-600 italic text-sm mt-2">{wetter.weather[0].description}</p>
    </div>
  );
}
