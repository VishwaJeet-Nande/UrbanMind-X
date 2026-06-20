"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import AuthGuard from "@/components/auth/AuthGuard";

import ComplaintTable from "@/components/complaints/ComplaintTable";
import ComplaintDetails from "@/components/complaints/ComplaintDetails";

import { useComplaints } from "@/hooks/useComplaints";

import { Complaint } from "@/types/complaint";

export default function ComplaintsPage() {
  const { data, loading } =
    useComplaints();

  const [
    selectedComplaint,
    setSelectedComplaint,
  ] = useState<Complaint | null>(
    null
  );

  return (
    <AuthGuard>
      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <h1 className="text-5xl font-bold">
            Complaint Operations Center
          </h1>

          <p className="text-slate-400 mt-2">
            Manage city complaints
          </p>

          {loading ? (
            <p className="mt-8">
              Loading...
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="col-span-2">
                <ComplaintTable
                  complaints={data}
                  onSelect={
                    setSelectedComplaint
                  }
                />
              </div>

              <div>
                <ComplaintDetails
                  complaint={
                    selectedComplaint
                  }
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </AuthGuard>
  );
}