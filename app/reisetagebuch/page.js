'use client';
import { useState, useEffect } from "react";

const startDatum = new Date("2025-06-29");
const endDatum = new Date("2025-07-20");

function berechneReisetag(heute) {
  const diffTime = heute.getTime() - startDatum.getTime();
  const diffTage = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  if (heute < startDatum) return { text: "Die Reise beginnt am 29. Juni 2025!", tag: null };
  if (heute > endDatum) return { text: "Die Reise ist vorbei. Willkommen zurück! ✨", tag: null };

  return {
    text: `Heute ist Reisetag ${diffTage} von 22`,
    tag: diffTage,
  };
}

export default function ReisetagebuchPage() {
  const [heute, setHeute] = useState(new Date());
  const [eintrag, setEintrag] = useState("");
  const [bild, setBild] = useState(null);
  const [gespeichert, setGespeichert] = useState(false);

  const datumString = heute.toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const reisetag = berechneReisetag(heute);

  useEffect(() => {
    const gespeichert = JSON.parse(localStorage.getItem("tagebuchEintrag")) || {};
    setEintrag(gespeichert.text || "");
    setBild(gespeichert.bild || null);
  }, []);

  const speichern = () => {
    localStorage.setItem("tagebuchEintrag", JSON.stringify({ text: eintrag, bild }));
    setGespeichert(true);
    setTimeout(() => setGespeichert(false), 2000);
  };

  const handleBildUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBild(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-4 text-rose-600 text-center">Reisetagebuch 📓</h1>
        <p className="text-center text-gray-700 mb-2">{datumString}</p>
        <p className="text-center text-lg font-semibold mb-6 text-rose-600">{reisetag.text}</p>

        <textarea
          rows={8}
          value={eintrag}
          onChange={(e) => setEintrag(e.target.value)}
          placeholder="Was haben wir heute erlebt? ✍️"
          className="w-full p-4 rounded-lg shadow bg-white/80 text-black placeholder-gray-500 mb-4"
        />

        <div className="mb-4">
          <div className="mb-4 text-center">
  <label
    htmlFor="bild-upload"
    className="inline-block bg-white/80 hover:bg-white text-black font-semibold px-6 py-2 rounded-lg shadow cursor-pointer"
  >
    📸 Bild auswählen
  </label>
  <input
    id="bild-upload"
    type="file"
    accept="image/*"
    onChange={handleBildUpload}
    className="hidden"
  />
</div>

        </div>

        {bild && (
          <div className="mb-4">
            <p className="mb-2 font-semibold text-sm text-gray-700">Vorschau:</p>
            <img
              src={bild}
              alt="Tagebuchbild"
              className="rounded-lg shadow-md max-h-80 w-auto mx-auto"
            />
          </div>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={speichern}
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg shadow"
          >
            Eintrag speichern
          </button>
          {gespeichert && <p className="text-sm text-green-600 mt-2">✔️ Gespeichert!</p>}
        </div>
      </div>
    </main>
  );
}