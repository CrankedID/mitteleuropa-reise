'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import WetterWidget from "../../../components/WetterWidget";

export default function SaalfeldenPage() {
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
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">Saalfelden</h1>

        <Image
          src="/images/saalfelden.jpg"
          alt="Saalfelden"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="mb-6 text-gray-800 text-center">
          Saalfelden am Steinernen Meer – ein charmantes Städtchen in den österreichischen Alpen, umgeben von Bergen, Seen und Natur pur.
        </p>

        <audio
          ref={audioRef}
          src="/audio/saalfelden.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏛️ Fakten über Saalfelden</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Lage:</strong> Im Pinzgau, Bundesland Salzburg, nahe dem Zeller See und Leogang.</li>
            <li><strong>Besonderheit:</strong> Beliebt für Wanderungen, Mountainbike-Touren und das Jazzfestival im Sommer.</li>
            <li><strong>Einwohner:</strong> Ca. 16.000</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Saalfelden" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants in Saalfelden</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>AlpenParks Restaurant:</strong> Moderne Alpenküche mit vegetarischen Gerichten.</li>
            <li><strong>Restaurant s&apos;Pfandl:</strong> Bodenständige österreichische Küche mit fleischlosen Alternativen.</li>
            <li><strong>Hotel Bacher:</strong> Regionale Bio-Küche mit saisonalem Gemüse.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}