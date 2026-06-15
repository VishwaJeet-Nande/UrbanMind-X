"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import { useComplaintPoints } from "@/hooks/useComplaintPoints";

export default function DigitalTwinMap() {
  const { data } = useComplaintPoints();

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

        {data.map((point) => (
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
                  Ward: {point.ward_name}
                </p>

                <p>
                  Priority:
                  {" "}
                  {point.priority}
                </p>

                <p>
                  Severity:
                  {" "}
                  {point.severity_score}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}