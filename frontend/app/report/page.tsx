"use client";

import Sidebar from "@/components/layout/Sidebar";
import AuthGuard from "@/components/auth/AuthGuard";
import ComplaintForm from "@/components/report/ComplaintForm";

export default function ReportPage() {
  return (
    <AuthGuard>
      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <ComplaintForm />
        </section>
      </main>
    </AuthGuard>
  );
}