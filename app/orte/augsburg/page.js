"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import WetterWidget from "../../../components/WetterWidget";

export default function AugsburgPage() {
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
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">Augsburg</h1>

        <Image
          src="/images/augsburg.jpg"
          alt="Augsburg"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-6"
        />

        <p className="mb-6 text-gray-800 text-center">
          Augsburg – eine der ältesten Städte Deutschlands mit reicher Geschichte und beeindruckender Architektur.
        </p>

        <audio
          ref={audioRef}
          src="/audio/augsburg.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏛️ Fakten über Augsburg</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Gruendung:</strong> 15 v. Chr. als Augusta Vindelicorum durch die Roemer.</li>
            <li><strong>Besonderheit:</strong> Bedeutende Handelsstadt in der Renaissance durch Fugger und Welser.</li>
            <li><strong>Sehenswürdigkeiten:</strong> Fuggerei, Augsburger Dom, Rathaus mit Goldener Saal.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Augsburg" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants in Augsburg</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Michelangelo:</strong> Italienische Küche mit vegetarischen Optionen.</li>
            <li><strong>Trattoria Pizzeria Crudo:</strong> Mediterrane Gerichte mit vielen vegetarischen Speisen.</li>
            <li><strong>Maximilian's:</strong> Moderne Küche mit vegetarischen Highlights.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}