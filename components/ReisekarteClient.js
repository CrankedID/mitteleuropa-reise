'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Marker-Fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const Reiseziele = [
  { name: "Augsburg", slug: "augsburg", position: [48.3715, 10.8985] },
  { name: "München", slug: "muenchen", position: [48.1351, 11.5820] },
  { name: "Wien", slug: "wien", position: [48.2082, 16.3738] },
  { name: "Balaton", slug: "balaton", position: [46.8300, 17.7333] },
  { name: "Klenovica", slug: "klenovica", position: [45.1057, 14.8586] },
  { name: "Saalfelden", slug: "saalfelden", position: [47.4269, 12.8487] },
  { name: "Berchtesgarden", slug: "berchtesgaden", position: [47.6275, 13.0006] },
];

import Link from "next/link";

export default function ReisekarteClient() {
  return (
    <div className="h-[500px] rounded-lg overflow-hidden shadow-md z-0 relative">
      <MapContainer center={[47.5, 13]} zoom={6} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	  className="!bg-transparent border-none"
    		style={{ height: "100%", width: "100%" }}
        />
        {Reiseziele.map((ort) => (
          <Marker key={ort.name} position={ort.position}>
            <Popup>
              <Link href={`/orte/${ort.slug}`}>{ort.name}</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
