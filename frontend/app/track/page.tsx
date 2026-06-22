"use client";

import { useState } from "react";

import {
  getComplaintById,
} from "@/services/complaint";

import { Complaint } from "@/types/complaint";


const STATUS_FLOW = [
  "reported",
  "verified",
  "assigned",
  "in_progress",
  "resolved",
  "closed",
];

export default function TrackPage() {
  const [id, setId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [complaint, setComplaint] =
    useState<Complaint | null>(
      null
    );

  async function handleTrack() {
    try {
      setLoading(true);

      const result =
        await getComplaintById(id);

      setComplaint(result);
    } catch (error) {
      console.error(error);

      alert(
        "Complaint not found"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">
          Track Complaint
        </h1>

        <p className="text-slate-400 mt-2">
          Enter your complaint ID
        </p>

        <div className="flex gap-4 mt-8">
          <input
            value={id}
            onChange={(e) =>
              setId(e.target.value)
            }
            placeholder="Complaint ID"
            className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-700"
          />

          <button
            onClick={handleTrack}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 rounded-xl"
          >
            {loading
              ? "Searching..."
              : "Track"}
          </button>
        </div>

        {complaint && (
          <div className="glass p-6 rounded-2xl mt-10">
            <h2 className="text-3xl font-bold">
              {complaint.title}
            </h2>

            <div className="space-y-3 mt-5">
              <p>
                <strong>ID:</strong>{" "}
                {complaint.id}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {complaint.status}
              </p>

              <p>
                <strong>Priority:</strong>{" "}
                {complaint.priority}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {
                  complaint.recommended_department
                }
              </p>

              <p>
                <strong>Ward:</strong>{" "}
                {complaint.ward_name}
              </p>

            <div className="mt-8">
               <h3 className="text-xl font-bold mb-4">
                 Complaint Timeline
           </h3>

           <div className="space-y-3">
             {STATUS_FLOW.map((step) => {
               const currentIndex =
                 STATUS_FLOW.indexOf(
                   complaint.status
                 );

               const stepIndex =
                 STATUS_FLOW.indexOf(step);

               const completed =
                 stepIndex <= currentIndex;

               return (
                 <div
                   key={step}
                   className="flex items-center gap-3"
                 >
                   <span>
                     {completed ? "✅" : "⬜"}
                   </span>

                   <span className="capitalize">
                     {step.replace("_", " ")}
                   </span>
                 </div>
               );
             })}
          </div>
        </div>
              </div>
          </div>
        )}
      </div>
    </main>
  );
}