export default function FilterPanel() {
  return (
    <div className="glass glow rounded-2xl p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        Filters
      </h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          Complaints
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          High Priority
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          Water Issues
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          Road Issues
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          Streetlights
        </label>
      </div>
    </div>
  );
}