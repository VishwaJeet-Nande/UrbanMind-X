"use client";

import Sidebar from "@/components/layout/Sidebar";
import AuthGuard from "@/components/auth/AuthGuard";
import KpiCard from "@/components/dashboard/KpiCard";

import {useCityOverview,
} from "@/hooks/useCityOverview";
import MapWrapper from "@/components/maps/MapWrapper";

export default function Home() {
  const { data, loading } =
    useCityOverview();

  return (
    <AuthGuard>
      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <h1 className="text-5xl font-bold">
            UrbanMindX Command Center
          </h1>

          <p className="text-slate-400 mt-2">
            AI Powered Smart City
            Intelligence
          </p>

          {loading ? (
            <p className="mt-8">
              Loading...
            </p>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-6 mt-10">
                <KpiCard
                  title="Total Complaints"
                  value={
                    data?.total_complaints ?? 0
                  }
                />

                <KpiCard
                  title="High Priority"
                  value={
                    data?.high_priority_complaints ??
                    0
                  }
                />

                <KpiCard
                  title="City Risk Score"
                  value={
                    data?.city_risk_score ?? 0
                  }
                />

                <KpiCard
                  title="Top Ward"
                  value={
                    data?.top_ward ?? "-"
                  }
                />
              </div>

              <div className="mt-10">
                <MapWrapper
                  filters={{
                  highPriority: true,
                  water: true,
                  road: true,
                  streetlight: true,
                   }}
                />
              </div>
            </>
          )}
        </section>
      </main>
    </AuthGuard>
  );
}