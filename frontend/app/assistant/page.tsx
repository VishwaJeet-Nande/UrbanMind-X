"use client";

import Sidebar from "@/components/layout/Sidebar";
import AuthGuard from "@/components/auth/AuthGuard";

import ChatWindow from "@/components/assistant/ChatWindow";

export default function AssistantPage() {
  return (
    <AuthGuard>
      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <h1 className="text-5xl font-bold">
            UrbanMindX AI Assistant
          </h1>

          <p className="text-slate-400 mt-2">
            Ask questions about city
            risks, complaints and
            infrastructure.
          </p>

          <ChatWindow />
        </section>
      </main>
    </AuthGuard>
  );
}