"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  getMyComplaints,
} from "@/services/complaint";

import { Complaint } from "@/types/complaint";

export default function MyComplaintsPage() {
  const [complaints, setComplaints] =
    useState<Complaint[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getMyComplaints();

        setComplaints(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">
        My Complaints
      </h1>

      <p className="text-slate-400 mt-2">
        Track all complaints you have
        submitted.
      </p>

      {loading ? (
        <div className="mt-8">
          Loading...
        </div>
      ) : (
        <div className="mt-10 space-y-4">
          {complaints.map(
            (complaint) => (
              <Link
                key={complaint.id}
                href={`/my-complaints/${complaint.id}`}
              >
                <div className="glass p-5 rounded-2xl hover:border-cyan-500 border border-transparent transition cursor-pointer">
                  <h2 className="text-xl font-bold">
                    {complaint.title}
                  </h2>

                  <div className="mt-3 space-y-1 text-sm">
                    <p>
                      Status:{" "}
                      {complaint.status}
                    </p>

                    <p>
                      Priority:{" "}
                      {complaint.priority}
                    </p>

                    <p>
                      Department:{" "}
                      {
                        complaint.recommended_department
                      }
                    </p>

                    <p>
                      Ward:{" "}
                      {complaint.ward_name}
                    </p>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </main>
  );
}