'use client';
import { useEffect, useState } from "react";

const initialItems = [
  "Reisepass / Personalausweis",
  "Zug- / Flugticket",
  "Brieftasche mit Bargeld & Karten",
  "Handy + Ladegerät",
  "Kamera oder GoPro",
  "Powerbank",
  "Reiseführer / Offline-Karten",
  "Sonnencreme",
  "Badehose / Bikini",
  "Wanderschuhe",
  "Regenjacke",
  "T-Shirts",
  "Kurze Hosen / Röcke",
  "Pullover / Fleece",
  "Unterwäsche & Socken",
  "Zahnbürste & Zahnpasta",
  "Duschgel / Shampoo (Reisegröße)",
  "Sonnenbrille",
  "Hut / Cap",
  "Wäschebeutel / Kulturbeutel",
  "Kleine Reiseapotheke",
  "Ohrstöpsel / Schlafmaske",
  "Reisehandtuch",
  "Buch / Kindle / Zeitschrift",
  "Snacks für unterwegs",
];

export default function PacklistePage() {
  const [gepackt, setGepackt] = useState([]);

  useEffect(() => {
    const gespeicherte = localStorage.getItem("packliste") || "[]";
    setGepackt(JSON.parse(gespeicherte));
  }, []);

  useEffect(() => {
    localStorage.setItem("packliste", JSON.stringify(gepackt));
  }, [gepackt]);

  const toggleItem = (item) => {
    if (gepackt.includes(item)) {
      setGepackt(gepackt.filter((i) => i !== item));
    } else {
      setGepackt([...gepackt, item]);
    }
  };

  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-xl bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-rose-600 text-center">
          Packliste 🎒
        </h1>

        <ul className="space-y-4">
          {initialItems.map((item) => (
            <li key={item} className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={gepackt.includes(item)}
                onChange={() => toggleItem(item)}
                className="h-5 w-5 accent-rose-600"
              />
              <span
                className={`text-lg ${
                  gepackt.includes(item)
                    ? "line-through text-gray-400"
                    : "text-gray-900"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}