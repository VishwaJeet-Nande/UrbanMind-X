interface Props {
  totalComplaints: number;
  riskScore: number;
  topWard: string;
}

export default function OperationsPanel({
  totalComplaints,
  riskScore,
  topWard,
}: Props) {
  return (
    <div className="glass glow rounded-2xl p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        Live Intelligence
      </h2>

      <div className="space-y-5">
        <div>
          <p className="text-slate-400">
            Total Complaints
          </p>

          <h3 className="text-3xl font-bold">
            {totalComplaints}
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Risk Score
          </p>

          <h3 className="text-3xl font-bold">
            {riskScore}
          </h3>
        </div>

        <div>
          <p className="text-slate-400">
            Highest Risk Ward
          </p>

          <h3 className="text-2xl font-bold">
            {topWard}
          </h3>
        </div>

        <div className="border-t border-slate-700 pt-4">
          <p className="text-cyan-400 font-medium">
            AI Recommendation
          </p>

          <p className="mt-2 text-slate-300">
            Prioritize Ward 1 monitoring and
            investigate infrastructure issues.
          </p>
        </div>
      </div>
    </div>
  );
}