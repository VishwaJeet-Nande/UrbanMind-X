interface Props {
  filters: {
    highPriority: boolean;
    water: boolean;
    road: boolean;
    streetlight: boolean;
  };
  onChange: (
    key:
      | "highPriority"
      | "water"
      | "road"
      | "streetlight"
  ) => void;
}

export default function FilterPanel({
  filters,
  onChange,
}: Props) {
  return (
    <div className="glass glow rounded-2xl p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        Filters
      </h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" checked readOnly />
          Complaints
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={filters.highPriority}
            onChange={() =>
              onChange("highPriority")
            }
          />
          High Priority
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={filters.water}
            onChange={() => onChange("water")}
          />
          Water Issues
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={filters.road}
            onChange={() => onChange("road")}
          />
          Road Issues
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={filters.streetlight}
            onChange={() =>
              onChange("streetlight")
            }
          />
          Streetlights
        </label>
      </div>
    </div>
  );
}