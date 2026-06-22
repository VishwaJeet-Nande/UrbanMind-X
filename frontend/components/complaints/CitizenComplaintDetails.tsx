"use client";

import { Complaint } from "@/types/complaint";

interface Props {
  complaint: Complaint | null;
}

export default function CitizenComplaintDetails({
  complaint,
}: Props) {
  if (!complaint) {
    return (
      <div className="glass p-6 rounded-2xl">
        Complaint not found
      </div>
    );
  }

  return (
    <div className="glass p-6 rounded-2xl">
      <h2 className="text-2xl font-bold">
        {complaint.title}
      </h2>

      <div className="mt-5 space-y-3 text-sm">
        <div>
          <strong>Status:</strong>{" "}
          <span className="text-cyan-400">
            {complaint.status}
          </span>
        </div>

        <p>
          <strong>Priority:</strong>{" "}
          {complaint.priority}
        </p>

        <p>
          <strong>Severity:</strong>{" "}
          {complaint.severity_score}
        </p>

        <p>
          <strong>Department:</strong>{" "}
          {
            complaint.recommended_department
          }
        </p>

        <p>
          <strong>Category:</strong>{" "}
          {complaint.category}
        </p>

        <p>
          <strong>AI Category:</strong>{" "}
          {complaint.ai_category}
        </p>

        <div className="pt-4">
          <strong>Description</strong>

          <p className="mt-2 text-slate-300">
            {complaint.description}
          </p>
        </div>
      </div>
    </div>
  );
}