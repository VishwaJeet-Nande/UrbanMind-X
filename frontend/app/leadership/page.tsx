"use client";

import { useCityOverview } from "@/hooks/useCityOverview";
import { useRiskAnalysis } from "@/hooks/useRiskAnalysis";
import RiskScoreChart from "@/components/charts/RiskScoreChart";
import ComplaintsChart from "@/components/charts/ComplaintsChart";

export default function LeadershipPage() {
  const {
    data: overview,
    loading: overviewLoading,
  } = useCityOverview();

  const {
    data: risks,
    loading: riskLoading,
  } = useRiskAnalysis();

  if (overviewLoading || riskLoading) {
    return (
      <main className="p-10">
        Loading leadership dashboard...
      </main>
    );
  }

  const sortedRisks = [...risks].sort(
    (a, b) => b.risk_score - a.risk_score
  );

  const highestRiskWard =
    sortedRisks[0]?.ward_name ?? "-";

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">
        Leadership Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Strategic city intelligence and
        operational overview.
      </p>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-5 gap-6 mt-10">
        <div className="glass p-5 rounded-2xl">
          <p className="text-slate-400">
            Total Complaints
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {overview?.total_complaints ?? 0}
          </h2>
        </div>

        <div className="glass p-5 rounded-2xl">
          <p className="text-slate-400">
            High Priority
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {overview?.high_priority_complaints ?? 0}
          </h2>
        </div>

        <div className="glass p-5 rounded-2xl">
          <p className="text-slate-400">
            High Risk Wards
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {overview?.high_risk_wards ?? 0}
          </h2>
        </div>

        <div className="glass p-5 rounded-2xl">
          <p className="text-slate-400">
            City Risk Score
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {overview?.city_risk_score ?? 0}
          </h2>
        </div>

        <div className="glass p-5 rounded-2xl">
          <p className="text-slate-400">
            Top Ward
          </p>
          <h2 className="text-2xl font-bold mt-2">
            {overview?.top_ward ?? "-"}
          </h2>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 mt-10">
        <RiskScoreChart
          data={sortedRisks}
         />

        <ComplaintsChart
         data={sortedRisks}
         />
      </div>

      {/* WARD TABLE */}
      <div className="glass rounded-2xl p-6 mt-10">
        <h2 className="text-2xl font-bold mb-5">
          Ward Intelligence
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3">
                Ward
              </th>

              <th className="text-left py-3">
                Complaints
              </th>

              <th className="text-left py-3">
                Avg Severity
              </th>

              <th className="text-left py-3">
                Risk Score
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedRisks.map((ward) => (
              <tr
                key={ward.ward_name}
                className="border-b border-slate-800"
              >
                <td className="py-3">
                  {ward.ward_name}
                </td>

                <td className="py-3">
                  {ward.complaint_count}
                </td>

                <td className="py-3">
                  {ward.average_severity}
                </td>

                <td className="py-3 font-bold text-cyan-400">
                  {ward.risk_score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* STRATEGIC INSIGHTS */}
      <div className="glass rounded-2xl p-6 mt-10">
        <h2 className="text-2xl font-bold mb-5">
          Strategic Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

  <div className="glass p-5 rounded-xl border border-cyan-500/10">
    <p className="text-cyan-400 font-semibold">
      City Risk Score
    </p>

    <p className="mt-2 text-slate-300">
      Current city risk score is
      <strong>
        {" "}
        {overview?.city_risk_score ?? 0}
      </strong>
      .
    </p>
  </div>

  <div className="glass p-5 rounded-xl border border-red-500/10">
    <p className="text-red-400 font-semibold">
      Highest Risk Ward
    </p>

    <p className="mt-2 text-slate-300">
      {highestRiskWard} currently has the
      highest risk concentration.
    </p>
  </div>

  <div className="glass p-5 rounded-xl border border-yellow-500/10">
    <p className="text-yellow-400 font-semibold">
      High Risk Wards
    </p>

    <p className="mt-2 text-slate-300">
      {overview?.high_risk_wards ?? 0} wards
      require operational attention.
    </p>
  </div>

  <div className="glass p-5 rounded-xl border border-green-500/10">
    <p className="text-green-400 font-semibold">
      Complaint Volume
    </p>

    <p className="mt-2 text-slate-300">
      Total complaints recorded:
      <strong>
        {" "}
        {overview?.total_complaints ?? 0}
      </strong>
    </p>
  </div>

</div>
      </div>
    </main>
  );
}