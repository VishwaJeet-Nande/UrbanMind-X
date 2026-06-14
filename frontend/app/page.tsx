import AuthGuard from "@/components/auth/AuthGuard";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <AuthGuard>
      <main className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-10">
          <h1 className="text-5xl font-bold">
            UrbanMindX Command Center
          </h1>
        </section>
      </main>
    </AuthGuard>
  );
}