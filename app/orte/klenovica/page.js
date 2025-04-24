'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";

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
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-rose-600">Klenovica</h1>

      <Image
        src="/images/klenovica.jpg"
        alt="Klenovica"
        width={800}
        height={500}
        className="rounded-xl shadow-lg my-4"
      />

      <p className="mb-6 font-bold text-black">
       Hier werden wir eine ganze Woche verbringen :)
      </p>

      <audio
        ref={audioRef}
        controls
        className="w-full rounded shadow-md mb-8"
        preload="auto"
      >
        <source src="/audio/klenovica.mp3" type="audio/mpeg" />
        Dein Browser unterstützt keine Audio-Wiedergabe.
      </audio>
    </main>
  );
}
