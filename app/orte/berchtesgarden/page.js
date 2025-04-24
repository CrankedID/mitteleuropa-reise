'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import WetterWidget from "../../../components/WetterWidget";

export default function BerchtesgardenPage() {
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
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">Berchtesgadener Land</h1>

        <Image
          src="/images/berchtesgarden.jpg"
          alt="Berchtesgadener Land"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="mb-6 text-gray-800 text-center">
          Berchtesgadener Land – eine alpine Region voller Naturwunder, historischer Orte und dem berühmten Königssee.
        </p>

        <audio
          ref={audioRef}
          src="/audio/berchtesgarden.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏛️ Fakten über das Berchtesgadener Land</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Lage:</strong> Im äußersten Südosten Bayerns an der Grenze zu Österreich.</li>
            <li><strong>Besonderheit:</strong> Heimat des Nationalparks Berchtesgaden und des Königssees.</li>
            <li><strong>Höhepunkte:</strong> Watzmann, Kehlsteinhaus, Ramsau bei Berchtesgaden.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Berchtesgaden" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants in der Region</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Gasthof Neuhaus (Berchtesgaden):</strong> Vegetarische & regionale Spezialitäten.</li>
            <li><strong>Jennerkaser:</strong> Hüttenküche mit Veggie-Optionen in traumhafter Bergkulisse.</li>
            <li><strong>Café Lockstein:</strong> Bio-Frühstück, hausgemachte Kuchen & vegetarische Gerichte.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
