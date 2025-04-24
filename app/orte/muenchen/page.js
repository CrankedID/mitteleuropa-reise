'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import WetterWidget from "../../../components/WetterWidget";

export default function MuenchenPage() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blockiert:", err);
      });
    }
  }, []);

  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">München</h1>

        <Image
          src="/images/muenchen.jpg"
          alt="München"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="mb-6 text-gray-800 text-center">
          München – die bayerische Landeshauptstadt, bekannt für das Oktoberfest, traditionelle Biergärten und moderne Lebensqualität.
        </p>

        <audio
          ref={audioRef}
          src="/audio/muenchen.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏛️ Fakten über München</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Gründung:</strong> 1158 durch Heinrich den Löwen.</li>
            <li><strong>Besonderheit:</strong> Zentrum für Kunst, Kultur, Wissenschaft & Sport.</li>
            <li><strong>Sehenswürdigkeiten:</strong> Marienplatz, Englischer Garten, Schloss Nymphenburg.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Muenchen" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants in München</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Tian München:</strong> Feine vegetarische Küche mit regionalem Fokus.</li>
            <li><strong>Prinz Myshkin:</strong> Kultrestaurant mit international vegetarischer Karte.</li>
            <li><strong>Gratitude:</strong> Vegane Küche mit kreativen Bowls und Currys.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
