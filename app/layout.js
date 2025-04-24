import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import ScrollSpy from "../components/ScrollSpy";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unsere Mitteleuropa-Reise",
  description: "Ein Reiseprojekt durch Mitteleuropa mit persönlichen Eindrücken.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${inter.className} text-black`}
        style={{
          backgroundImage: "url('/images/strand.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* 🧭 Navigation */}
        <nav className="bg-yellow-100/80 backdrop-blur-md shadow-md sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex gap-6 items-center">
            <Link href="/" className="nav-link text-lg font-semibold text-gray-800 hover:text-rose-600">
              Start
            </Link>
            <Link href="/#karte" className="nav-link text-gray-800 hover:text-rose-600">
              Karte
            </Link>
            <Link href="/galerie" className="nav-link text-gray-800 hover:text-rose-600">
              Galerie
            </Link>
            <Link href="/orte" className="nav-link text-gray-800 hover:text-rose-600">
              Orte
            </Link>
            <Link href="/packliste" className="nav-link text-gray-800 hover:text-rose-600">
              Packliste
            </Link>
	    <Link href="/reisetagebuch" className="nav-link text-gray-800 hover:text-rose-600">
  	      Tagebuch
	    </Link>
	    <Link href="/budget" className="nav-link text-gray-800 hover:text-rose-600">
  	      Budget
	    </Link>

          </div>
        </nav>

        <ScrollSpy />

        {/* Seiteninhalt */}
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-700 py-10">
          &copy; {new Date().getFullYear()} Mitteleuropa-Reise von Jonas und Carina ❤️
        </footer>
      </body>
    </html>
  );
}
