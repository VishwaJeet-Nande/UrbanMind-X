import { RiskAnalysis } from "@/types/risk";

interface Props {
  risks: RiskAnalysis[];
}

export default function RiskTable({ risks }: Props) {
  return (
    <div className="glass glow rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        Ward Risk Rankings
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left p-3">Ward</th>
              <th className="text-left p-3">Complaints</th>
              <th className="text-left p-3">Avg Severity</th>
              <th className="text-left p-3">Risk Score</th>
              <th className="text-left p-3">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            {risks.map((risk) => (
              <tr
                key={risk.ward_name}
                className="border-b border-slate-800 hover:bg-slate-900/50"
              >
                <td className="p-3 font-medium">
                  {risk.ward_name}
                </td>

                <td className="p-3">
                  {risk.complaint_count}
                </td>

                <td className="p-3">
                  {risk.average_severity}
                </td>

                <td className="p-3 font-bold">
                  {risk.risk_score}
                </td>

                <td className="p-3 text-slate-300">
                  {risk.recommendation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
