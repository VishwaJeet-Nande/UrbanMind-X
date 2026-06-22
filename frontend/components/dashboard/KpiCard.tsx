"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string | number;
}

export default function KPICard({
  title,
  value,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
      glass
      rounded-2xl
      p-6
      border
      border-cyan-500/10
      hover:border-cyan-400/40
      transition-all
      duration-300
      "
    >
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </motion.div>
  );
}