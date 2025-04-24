'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import OrtsLayout from "../../../components/OrtsLayout";

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
    <OrtsLayout title="Klenovica">
      <Image
        src="/images/klenovica.jpg"
        alt="Klenovica"
        width={800}
        height={500}
        className="rounded-xl shadow-lg mx-auto mb-6"
      />

      <p className="mb-4 text-gray-800 text-center">
        Klenovica – ein idyllisches Küstendorf an der Adria. Perfekt zum Entspannen, Baden und Genießen 🌊☀️
      </p>

      <audio
        ref={audioRef}
        src="/audio/klenovica.mp3"
        preload="auto"
        className="w-full rounded shadow-md mb-4"
      />
    </OrtsLayout>
  );
}