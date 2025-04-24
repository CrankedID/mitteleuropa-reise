'use client';
import Reisekarte from "../components/Reisekarte";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Abschnitt: Start */}
      <section id="start" className="min-h-screen py-24 px-4 sm:px-8 text-center bg-white/30 backdrop-blur-md rounded-xl shadow-xl">
        <h1 className="text-5xl font-bold mb-6 text-rose-600">Willkommen auf unserer Reise-Seite!</h1>
        <p className="mb-8 text-lg text-gray-800 max-w-3xl mx-auto">
          Wir nehmen dich mit auf unsere Rundreise durch Mitteleuropa: Augsburg, Wien, Balaton,
          Klenovica und mehr 🌍❤️
        </p>
        <div className="mb-10">
          <Image
            src="/images/reise-cover.jpg"
            alt="Reiseimpression"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Abschnitt: Karte */}
      <section id="karte" className="min-h-screen py-24 px-4 sm:px-8 bg-white/30 backdrop-blur-md rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-rose-600 text-center">Unsere Route</h2>
        <div className="max-w-4xl mx-auto">
          <Reisekarte />
        </div>
      </section>

      {/* Abschnitt: Galerie */}
      <section id="galerie" className="min-h-screen py-24 px-4 sm:px-8 text-center bg-white/30 backdrop-blur-md rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-rose-600">Bildergalerie</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Alle Highlights unserer Reise in Bildern – besuche die Galerie-Seite für mehr!
        </p>
        <Image
          src="/images/1.jpg"
          alt="Galerie Vorschau"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto"
        />
      </section>

      {/* Abschnitt: Orte */}
      <section id="orte" className="min-h-screen py-24 px-4 sm:px-8 bg-white/30 backdrop-blur-md rounded-xl shadow-xl text-center">
        <h2 className="text-3xl font-semibold mb-6 text-rose-600">Unsere Orte</h2>
        <p className="text-gray-800 max-w-xl mx-auto">
          Erfahre mehr über die Städte und Orte, die wir besuchen werden – Augsburg, Wien, Klenovica und viele mehr.
        </p>
      </section>
    </>
  );
}
