"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import AuthGuard from "@/components/auth/AuthGuard";

import MapWrapper from "@/components/maps/MapWrapper";

import FilterPanel from "@/components/digital-twin/FilterPanel";
import OperationsPanel from "@/components/digital-twin/OperationsPanel";
import { useCityOverview } from "@/hooks/useCityOverview";

export default function DigitalTwinPage() {
  const { data } = useCityOverview();

  const [filters, setFilters] = useState({
    highPriority: true,
    water: true,
    road: true,
    streetlight: true,
  });

  return (
    <AuthGuard>
      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <h1 className="text-5xl font-bold">
            Digital Twin Operations Center
          </h1>

          <p className="text-slate-400 mt-2">
            Real-time city intelligence and
            infrastructure monitoring.
          </p>

          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-2">
              <FilterPanel
                filters={filters}
                onChange={(key) =>
                  setFilters((prev) => ({
                    ...prev,
                    [key]: !prev[key],
                  }))
                }
              />
            </div>

            <div className="col-span-7">
              <div className="glass glow rounded-2xl p-4">
                <MapWrapper filters={filters} />
              </div>
            </div>

            <div className="col-span-3">
              <OperationsPanel
                totalComplaints={
                  data?.total_complaints ?? 0
                }
                riskScore={
                  data?.city_risk_score ?? 0
                }
                topWard={
                  data?.top_ward ?? "-"
                }
              />
            </div>
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}