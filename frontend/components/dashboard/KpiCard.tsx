interface Props {
  title: string;
  value: string | number;
}

export default function KpiCard({
  title,
  value,
}: Props) {
  return (
    <div className="glass glow rounded-2xl p-6">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}