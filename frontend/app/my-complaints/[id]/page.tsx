"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getComplaintById } from "@/services/complaint";
import { Complaint } from "@/types/complaint";

import CitizenComplaintDetails from "@/components/complaints/CitizenComplaintDetails";

const STATUS_FLOW = [
  "reported",
  "verified",
  "assigned",
  "in_progress",
  "resolved",
  "closed",
];

export default function ComplaintPage() {
  const params = useParams();

  const complaintId = String(
    params?.["id"] ?? ""
  );

  const [complaint, setComplaint] =
    useState<Complaint | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!complaintId) return;

    async function load() {
      try {
        const data =
          await getComplaintById(
            complaintId
          );

        setComplaint(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [complaintId]);

  if (loading) {
    return (
      <main className="p-10">
        Loading...
      </main>
    );
  }

  if (!complaint) {
    return (
      <main className="p-10">
        Complaint not found
      </main>
    );
  }

  const currentIndex =
    STATUS_FLOW.indexOf(
      complaint.status
    );

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-8">
        Complaint Details
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <CitizenComplaintDetails
          complaint={complaint}
        />

        <div className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">
            Timeline
          </h2>

          <div className="space-y-4">
            {STATUS_FLOW.map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3"
                >
                  <span>
                    {index <= currentIndex
                      ? "✅"
                      : "⬜"}
                  </span>

                  <span className="capitalize">
                    {step.replace(
                      "_",
                      " "
                    )}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="mt-8 space-y-2 text-sm">
            <p>
              <strong>Ward:</strong>{" "}
              {complaint.ward_name}
            </p>

            <p>
              <strong>Created:</strong>{" "}
              {complaint.created_at}
            </p>

            <p>
              <strong>Updated:</strong>{" "}
              {complaint.updated_at}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}