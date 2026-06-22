"use client";

import { useEffect, useState } from "react";

import { Complaint } from "@/types/complaint";

import {
  updateComplaintStatus,
} from "@/services/complaint";

interface Props {
  complaint: Complaint | null;
}

const STATUS_OPTIONS = [
  "reported",
  "verified",
  "assigned",
  "in_progress",
  "resolved",
  "closed",
];

export default function ComplaintDetails({
  complaint,
}: Props) {
  const [status, setStatus] =
    useState("reported");

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (complaint) {
      setStatus(complaint.status);
    }
  }, [complaint]);

  if (!complaint) {
    return (
      <div className="glass p-6 rounded-2xl">
        Select a complaint
      </div>
    );
  }

  async function handleUpdateStatus() {
    if (!complaint) return;

    try {
      setSaving(true);

      await updateComplaintStatus(
        complaint.id,
        status
      );

      alert(
        "Status updated successfully"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update status"
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="glass p-6 rounded-2xl">
      <h2 className="text-2xl font-bold">
        {complaint.title}
      </h2>

      <div className="mt-5 space-y-3 text-sm">
        <div>
          <strong>Status</strong>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="w-full mt-2 p-2 rounded-lg bg-slate-900 border border-slate-700"
          >
            {STATUS_OPTIONS.map(
              (item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}
          </select>

          <button
            onClick={
              handleUpdateStatus
            }
            disabled={saving}
            className="mt-3 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold p-2 rounded-xl"
          >
            {saving
              ? "Saving..."
              : "Update Status"}
          </button>
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