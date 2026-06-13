import {
  LayoutDashboard,
  AlertTriangle,
  Map,
  BrainCircuit,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen glass border-r border-cyan-500/10 p-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        UrbanMindX
      </h1>

      <p className="text-slate-400 text-sm mt-1">
        Predict. Simulate. Optimize.
      </p>

      <div className="mt-12 space-y-6">
        <div className="flex items-center gap-3">
          <LayoutDashboard size={20} />
          Dashboard
        </div>

        <div className="flex items-center gap-3">
          <AlertTriangle size={20} />
          Risks
        </div>

        <div className="flex items-center gap-3">
          <Map size={20} />
          Digital Twin
        </div>

        <div className="flex items-center gap-3">
          <BrainCircuit size={20} />
          AI Assistant
        </div>
      </div>
    </aside>
  );
}