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

interface Props {
  filters?: {
    highPriority: boolean;
    water: boolean;
    road: boolean;
    streetlight: boolean;
  };
}

export default function DigitalTwinMap({
  filters,
}: Props) {
  const {
    data: complaintPoints,
    loading,
  } = useComplaintPoints();
  const filteredPoints = complaintPoints.filter(
  (point: any) => {
    if (
      filters?.highPriority === false &&
      point.priority === "High"
    ) {
      return false;
    }

    const title =
      point.title?.toLowerCase() || "";

    if (
      filters?.water === false &&
      title.includes("water")
    ) {
      return false;
    }

    if (
      filters?.road === false &&
      title.includes("road")
    ) {
      return false;
    }

    if (
      filters?.streetlight === false &&
      (
        title.includes("streetlight") ||
        title.includes("light")
      )
    ) {
      return false;
    }

    return true;
  }
);

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
          attribution="CartoDB"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {filteredPoints.map((point) => (
          <Marker
            key={point.id}
            position={[
              point.latitude,
              point.longitude,
            ]}
          >
            <Popup>
              <div className="w-[180px]">
                <h3 className="font-bold text-lg mb-2 text-cyan-400">
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