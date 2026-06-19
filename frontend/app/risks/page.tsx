"use client";

import Sidebar from "@/components/layout/Sidebar";
import AuthGuard from "@/components/auth/AuthGuard";

import RiskTable from "@/components/risks/RiskTable";

import {
  useRiskAnalysis,
} from "@/hooks/useRiskAnalysis";

export default function RisksPage() {
  const {
    data,
    loading,
  } = useRiskAnalysis();

  const cityRiskScore =
    data.reduce(
      (sum, ward) =>
        sum + ward.risk_score,
      0
    );

  const highestRiskWard =
    data.length > 0
      ? data.reduce((prev, current) =>
          current.risk_score >
          prev.risk_score
            ? current
            : prev
        )
      : null;

  return (
    <AuthGuard>
      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <h1 className="text-5xl font-bold">
            Risk Intelligence Center
          </h1>

          <p className="text-slate-400 mt-2">
            AI Powered Risk Monitoring
          </p>

          {loading ? (
            <p className="mt-8">
              Loading...
            </p>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="glass glow rounded-2xl p-6">
                  <p className="text-slate-400">
                    City Risk Score
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {cityRiskScore}
                  </h2>
                </div>

                <div className="glass glow rounded-2xl p-6">
                  <p className="text-slate-400">
                    High Risk Wards
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    {
                      data.filter(
                        (ward) =>
                          ward.risk_score >=
                          10
                      ).length
                    }
                  </h2>
                </div>

                <div className="glass glow rounded-2xl p-6">
                  <p className="text-slate-400">
                    Highest Risk Ward
                  </p>

                  <h2 className="text-2xl font-bold mt-3">
                    {highestRiskWard
                      ?.ward_name ??
                      "-"}
                  </h2>
                </div>
              </div>

              <RiskTable
                risks={data}
              />
            </>
          )}
        </section>
      </main>
    </AuthGuard>
  );
}