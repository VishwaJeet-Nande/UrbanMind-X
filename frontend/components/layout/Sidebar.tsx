import {
  LayoutDashboard,
  AlertTriangle,
  Map,
  BrainCircuit,
  FileText,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";

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
        <Link href="/" className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
         
        <Link href="/report" className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
          <FileText size={20} />
          Report Complaint
        </Link>
       <Link href="/complaints"className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
         <ClipboardList size={20} />
         Complaints
       </Link>
       
        <Link href="/risks" className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
          <AlertTriangle size={20} />
          Risks
        </Link>

        <Link href="/digital-twin" className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
          <Map size={20} />
          Digital Twin
        </Link>

        <Link href="/assistant" className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
          <BrainCircuit size={20} />
          AI Assistant
        </Link>
      </div>
    </aside>
  );
}