export default function TaskFilters({ filter, setFilter }) {
  return (
    <div className="max-w-xl mx-auto mt-4 flex gap-3">
      {["all", "pending", "in-progress", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-lg border ${
            filter === f ? "bg-blue-600 text-white" : "bg-white text-gray-700"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
