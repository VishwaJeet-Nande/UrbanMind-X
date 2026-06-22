"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";



import {
  useComplaintPoints,
} from "@/hooks/useComplaintPoints";
import HeatLayer from "./HeatLayer";

export default function DigitalTwinMap() {
  const {
    data: complaintPoints,
    loading,
  } = useComplaintPoints();

  if (loading) {
    return (
      <div className="glass p-8 rounded-2xl">
        Loading Digital Twin...
      </div>
    );
  }

  return (
    <div className="glass glow rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-xl font-bold">
          Digital Twin Command Center
        </h2>
      </div>

      <MapContainer
        center={[20.7074, 76.5688]}
        zoom={13}
        style={{
          height: "600px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <HeatLayer
          points={complaintPoints}
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
  <div className="min-w-[220px]">
    <h3 className="font-bold text-lg mb-2">
      🚨 {point.title}
    </h3>

    <div className="space-y-1 text-sm">
      <p>
        <strong>Ward:</strong>{" "}
        {point.ward_name}
      </p>

      <p>
        <strong>Severity:</strong>{" "}
        {point.severity_score}/10
      </p>

      <p>
        <strong>Priority:</strong>{" "}
        {point.priority}
      </p>

      <hr className="my-2" />

      <p className="font-semibold text-cyan-600">
        AI Recommendation
      </p>

      <p>
        Immediate inspection
        recommended.
      </p>
    </div>
  </div>
</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}