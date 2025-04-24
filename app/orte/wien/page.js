'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import WetterWidget from "../../../components/WetterWidget";

export default function WienPage() {
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
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">Wien</h1>

        <Image
          src="/images/wien.jpg"
          alt="Wien"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="mb-6 text-gray-800 text-center">
          Wien – die Hauptstadt & Kulturmetropole Österreichs. Berühmt für Musik, Kaffeehauskultur und imperiales Flair.
        </p>

        <audio
          ref={audioRef}
          src="/audio/wien.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏛️ Fakten über Wien</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Hauptstadt:</strong> Seit 1918 die Bundeshauptstadt Österreichs.</li>
            <li><strong>Musikstadt:</strong> Wirkungsstätte von Mozart, Beethoven und Strauss.</li>
            <li><strong>Besonderheit:</strong> Die Wiener Kaffeehauskultur ist UNESCO-Weltkulturerbe.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Wien" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants in Wien</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Tian:</strong> Gourmetküche – komplett vegetarisch, mit Michelin-Stern.</li>
            <li><strong>Veggiezz:</strong> Trendige vegane Burger und Bowls.</li>
            <li><strong>Deli Bluem:</strong> Bio, regional und pflanzenbasiert.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}