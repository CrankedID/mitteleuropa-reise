// Galerie-Seite mit moderner Lightbox (yet-another-react-lightbox)
'use client';
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GaleriePage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const bilder = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  const slides = bilder.map((src) => ({ src }));

  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-5xl bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-rose-600">Reise-Galerie</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bilder.map((src, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="hover:opacity-80 transition"
            >
              <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow">
                <Image
                  src={src}
                  alt={`Bild ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
        />
      </div>
    </main>
  );
}