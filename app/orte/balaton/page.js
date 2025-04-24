"use client";

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
          Der Balaton – auch als &quot;Plattensee&quot; bekannt – ist der gr&ouml;&szlig;te See Mitteleuropas und ein beliebtes Reiseziel in Ungarn.
        </p>

        <audio
          ref={audioRef}
          src="/audio/balaton.mp3"
          preload="auto"
          className="w-full rounded shadow-md mb-6"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🏛️ Fakten &uuml;ber den Balaton</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Lage:</strong> Westungarn, umgeben von Weinbergen und Thermen.</li>
            <li><strong>Gr&ouml;&szlig;e:</strong> ca. 77 km lang und 14 km breit.</li>
            <li><strong>Besonderheit:</strong> Familienfreundliche Str&auml;nde und seichte Ufer machen ihn ideal zum Baden.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🌤️ Aktuelles Wetter</h2>
          <WetterWidget city="Balaton" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-rose-600 mb-4">🥗 Vegetarische Restaurants in der Region</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Ap&aacute;ts&aacute;gi Rege Cukr&aacute;szda (Tihany):</strong> Ber&uuml;hmt f&uuml;r Lavendel-Kuchen und vegetarische Snacks.</li>
            <li><strong>Veganeck Balatonf&uuml;red:</strong> Pflanzliche Burger und Bowls mit Seeblick.</li>
            <li><strong>Napf&eacute;ny Restaurant:</strong> Traditionelle K&uuml;che mit vegetarischer Auswahl.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}