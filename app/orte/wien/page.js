'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";

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
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-rose-600">Wien</h1>

      <Image
        src="/images/wien.jpg"
        alt="Wien"
        width={800}
        height={500}
        className="rounded-xl shadow-lg my-4"
      />

      <p className="mb-6 font-bold text-black">
        Ob Österreichs Hauptstadt uns wohl etwas zu bieten hat?
      </p>

      <audio
        ref={audioRef}
        controls
        className="w-full rounded shadow-md mb-8"
        preload="auto"
      >
        <source src="/audio/wien.mp3" type="audio/mpeg" />
        Dein Browser unterstützt keine Audio-Wiedergabe.
      </audio>
    </main>
  );
}
