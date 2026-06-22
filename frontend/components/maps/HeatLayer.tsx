"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

interface Point {
  latitude: number;
  longitude: number;
  severity_score: number;
}

interface Props {
  points: Point[];
}

export default function HeatLayer({
  points,
}: Props) {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;

    const heatPoints = points.map((p) => [
      p.latitude,
      p.longitude,
      p.severity_score / 10,
    ]);

    const heatLayer = (L as any).heatLayer(
      heatPoints,
      {
        radius: 25,
        blur: 20,
        maxZoom: 17,
      }
    );

    heatLayer.addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
}