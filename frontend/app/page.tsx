import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      <section className="flex-1 p-10">
        <h1 className="text-5xl font-bold">
          UrbanMindX Command Center
        </h1>

        <p className="text-slate-400 mt-3">
          AI-Powered Digital Twin &
          Decision Intelligence Platform
        </p>
      </section>
    </main>
  );
}