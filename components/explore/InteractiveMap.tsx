"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Point {
  id: number;
  name: string;
  type: string;
  coordinates: { lat: number; lng: number };
  description: string;
}

interface InteractiveMapProps {
  points: Point[];
}

// Custom marker icons
const createCustomIcon = (type: string) => {
  const iconMap: { [key: string]: string } = {
    home: "📍",
    waterfall: "💧",
    temple: "🛕",
    paddy: "🌾",
    lake: "🏞️",
    river: "🏊",
  };

  return L.divIcon({
    html: `<div style="font-size: 30px;">${iconMap[type] || "📍"}</div>`,
    className: "custom-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
};

export default function InteractiveMap({ points }: InteractiveMapProps) {
  const center: [number, number] = [6.7320291188910595, 81.17117132536951];

  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point) => (
        <Marker
          key={point.id}
          position={[point.coordinates.lat, point.coordinates.lng]}
          icon={createCustomIcon(point.type)}
        >
          <Popup>
            <div className="p-2">
              <h3 style={{ whiteSpace: 'pre' }} className="font-display font-semibold text-lg mb-1">
                {point.name+ "                     "}
              </h3>
              <p className="text-sm text-gray-600">
                <img
                  src={point.description}
                  alt={`Gallery image`}
                  className="object-container"
                />
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
