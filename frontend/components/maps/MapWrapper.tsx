"use client";

import dynamic from "next/dynamic";

const DigitalTwinMap = dynamic(
  () =>
    import("./DigitalTwinMap"),
  {
    ssr: false,
  }
);

export default function MapWrapper() {
  return <DigitalTwinMap />;
}