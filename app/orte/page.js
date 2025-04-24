import Link from "next/link";

const Orte = [
  { name: "Augsburg", slug: "augsburg" },
  { name: "München", slug: "muenchen" },
  { name: "Wien", slug: "wien" },
  { name: "Balaton", slug: "balaton" },
  { name: "Klenovica", slug: "klenovica" },
  { name: "Saalfelden", slug: "saalfelden" },
  { name: "Berchtesgarden", slug: "berchtesgarden" },
];

export function OrtePage() {
  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h1 className="mb-8 text-3xl font-bold text-rose-600 text-center">Unsere Reiseorte</h1>
        <ul className="space-y-3">
          {Orte.map((ort) => (
            <li key={ort.slug} className="text-center">
              <Link
                href={`/orte/${ort.slug}`}
                className="text-xl font-bold text-rose-600 hover:text-teal-900"
              >
                {ort.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
