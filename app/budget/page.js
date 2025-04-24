"use client";

import { useEffect, useState } from "react";

export default function BudgetRechnerPage() {
  const [eintraege, setEintraege] = useState([]);
  const [beschreibung, setBeschreibung] = useState("");
  const [betrag, setBetrag] = useState("");

  useEffect(() => {
    const gespeicherte = JSON.parse(localStorage.getItem("reiseBudget")) || [];
    setEintraege(gespeicherte);
  }, []);

  useEffect(() => {
    localStorage.setItem("reiseBudget", JSON.stringify(eintraege));
  }, [eintraege]);

  const addEintrag = () => {
    if (!beschreibung || !betrag || isNaN(parseFloat(betrag))) return;
    setEintraege([...eintraege, { beschreibung, betrag: parseFloat(betrag) }]);
    setBeschreibung("");
    setBetrag("");
  };

  const gesamt = eintraege.reduce((sum, e) => sum + e.betrag, 0);

  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">💰 Reise-Budget-Rechner</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Beschreibung (z. B. Hotel, Essen...)"
            value={beschreibung}
            onChange={(e) => setBeschreibung(e.target.value)}
            className="flex-1 p-2 rounded bg-white/80 shadow text-black"
          />
          <input
            type="number"
            placeholder="Betrag in €"
            value={betrag}
            onChange={(e) => setBetrag(e.target.value)}
            className="w-40 p-2 rounded bg-white/80 shadow text-black"
          />
          <button
            onClick={addEintrag}
            className="bg-rose-600 text-white px-4 py-2 rounded shadow hover:bg-rose-700"
          >
            Hinzufügen
          </button>
        </div>

        <ul className="space-y-2 mb-6">
          {eintraege.map((e, index) => (
            <li key={index} className="flex justify-between text-gray-800 bg-white/60 px-4 py-2 rounded shadow">
              <span>{e.beschreibung}</span>
              <span>{e.betrag.toFixed(2)} €</span>
            </li>
          ))}
        </ul>

        <div className="text-center text-xl font-semibold text-gray-900">
          Gesamt: {gesamt.toFixed(2)} €
        </div>
      </div>
    </main>
  );
}
