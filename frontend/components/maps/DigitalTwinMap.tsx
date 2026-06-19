"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";


export default function DigitalTwinMap() {
  const complaintPoints = [
  {
    id: 1,
    title: "Water Leakage",
    latitude: 20.708,
    longitude: 76.568,
    severity: 8,
  },
  {
    id: 2,
    title: "Road Damage",
    latitude: 20.706,
    longitude: 76.572,
    severity: 6,
  },
  {
    id: 3,
    title: "Streetlight Failure",
    latitude: 20.710,
    longitude: 76.575,
    severity: 5,
  },
];

  return (
    <div className="glass glow rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-xl font-bold">
          Digital Twin City Map
        </h2>
      </div>

      <MapContainer
        center={[20.7074, 76.5688]}
        zoom={13}
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {complaintPoints.map((point) => (
          <Marker
            key={point.id}
            position={[
              point.latitude,
              point.longitude,
            ]}
          >
            <Popup>
              <div>
                <h3 className="font-bold">
                  {point.title}
                </h3>

                <p>
                  Severity: {point.severity}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}