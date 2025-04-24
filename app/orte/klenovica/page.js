'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import WetterWidget from "../../../components/WetterWidget";

export default function KlenovicaPage() {
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
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">Klenovica</h1>

        <Image
          src="/images/klenovica.jpg"
          alt="Klenovica"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="mb-6 text-gray-800 text-center">
          Klenovica – ein ruhiges Fischerdorf an der Adriaküste Kroatiens mit kristallklarem Wasser und entspannter Atmosphäre.
        </p>

        <audio
          ref={audioRef}
          src="/audio/klenovica.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏛️ Fakten über Klenovica</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Lage:</strong> An der kroatischen Adriaküste zwischen Novi Vinodolski und Senj.</li>
            <li><strong>Besonderheit:</strong> Beliebtes Ziel für Camping und Schnorcheln in ruhiger Umgebung.</li>
            <li><strong>Einwohner:</strong> Ca. 350 ständige Bewohner.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Klenovica" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants in der Nähe</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Bistro &quot;Konoba Pod Orajom&quot; (Novi Vinodolski):</strong> Fisch- und Gemüsegerichte mit lokalen Zutaten.</li>
            <li><strong>Restoran &quot;Maestral&quot;:</strong> Mediterrane Küche mit vegetarischen Optionen.</li>
            <li><strong>Vegan House Senj:</strong> Pflanzliche Speisen in ca. 15 min Entfernung.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
