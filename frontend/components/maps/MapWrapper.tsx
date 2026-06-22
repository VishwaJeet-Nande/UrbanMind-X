"use client";

import dynamic from "next/dynamic";

interface Props {
  filters: {
    highPriority: boolean;
    water: boolean;
    road: boolean;
    streetlight: boolean;
  };
}

const DigitalTwinMap = dynamic(
  () => import("./DigitalTwinMap"),
  {
    ssr: false,
  }
);

export default function MapWrapper({
  filters,
}: Props) {
  return (
    <DigitalTwinMap
      filters={filters}
    />
  );
}