"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { RiskAnalysis } from "@/types/risk";

interface Props {
  data: RiskAnalysis[];
}

export default function ComplaintsChart({
  data,
}: Props) {
  return (
    <div className="glass p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-5">
        Complaints by Ward
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="ward_name" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="complaint_count"
            fill="#38bdf8"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}