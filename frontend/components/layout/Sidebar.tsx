"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  AlertTriangle,
  Map,
  BrainCircuit,
  FileText,
  ClipboardList,
  FolderOpen,
  ChartNoAxesColumn,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navClass = (href: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
    ${
      pathname === href
        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
        : "hover:bg-slate-800 hover:text-cyan-400"
    }`;

  return (
    <aside className="w-72 h-screen glass border-r border-cyan-500/10 p-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        UrbanMindX
      </h1>

      <p className="text-slate-400 text-sm mt-1">
        Predict. Simulate. Optimize.
      </p>

      <div className="mt-12 space-y-3">
        <Link href="/" className={navClass("/")}>
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/report"
          className={navClass("/report")}
        >
          <FileText size={20} />
          Report Complaint
        </Link>

        <Link
          href="/my-complaints"
          className={navClass("/my-complaints")}
        >
          <FolderOpen size={20} />
          My Complaints
        </Link>

        <Link
          href="/complaints"
          className={navClass("/complaints")}
        >
          <ClipboardList size={20} />
          Complaints
        </Link>

        <Link
          href="/risks"
          className={navClass("/risks")}
        >
          <AlertTriangle size={20} />
          Risks
        </Link>

        <Link
          href="/digital-twin"
          className={navClass("/digital-twin")}
        >
          <Map size={20} />
          Digital Twin
        </Link>

        <Link
          href="/leadership"
          className={navClass("/leadership")}
        >
          <ChartNoAxesColumn size={20} />
          Leadership Dashboard
        </Link>

        <Link
          href="/assistant"
          className={navClass("/assistant")}
        >
          <BrainCircuit size={20} />
          AI Assistant
        </Link>
      </div>
    </aside>
  );
}