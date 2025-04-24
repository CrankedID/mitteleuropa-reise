'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import WetterWidget from "../../../components/WetterWidget";

export default function BalatonPage() {
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
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">Balaton</h1>

        <Image
          src="/images/balaton.jpg"
          alt="Balaton"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="mb-6 text-gray-800 text-center">
          Der Balaton – das "ungarische Meer". Der größte Binnensee Mitteleuropas ist ein Paradies für Badeurlaub und Wassersport.
        </p>

        <audio
          ref={audioRef}
          src="/audio/balaton.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏞️ Fakten über den Balaton</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Fläche:</strong> Rund 600 km² – der größte See Mitteleuropas.</li>
            <li><strong>Sehenswerte Orte:</strong> Tihany, Siófok, Balatonfüred, Keszthely.</li>
            <li><strong>Aktivitäten:</strong> Segeln, Radfahren, Baden, Weinverkostung.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Balaton" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants am Balaton</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>FrissTerasz (Balatonfüred):</strong> Frische Bowls, vegane Wraps & Smoothies.</li>
            <li><strong>Karám Restaurant (Tihany):</strong> Traditionelle ungarische Küche mit vegetarischer Auswahl.</li>
            <li><strong>Vegane Küche am See (Siófok):</strong> Klein, lokal & rein pflanzlich.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}