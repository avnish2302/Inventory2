export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-amber-700">Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-zinc-900 p-5 rounded border border-zinc-800">
          Punch In
        </div>

        <div className="bg-zinc-900 p-5 rounded border border-zinc-800">
          Check In
        </div>

        <div className="bg-zinc-900 p-5 rounded border border-zinc-800">
          Reports
        </div>
      </div>
    </div>
  );
}
