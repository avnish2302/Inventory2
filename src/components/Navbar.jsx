import Button from "./Button";

export default function Navbar() {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex justify-between">
      <h1 className="font-bold text-amber-700">SFA System</h1>
      {/* 
      <button className="bg-amber-800 hover:bg-amber-700 px-3 py-1 rounded text-white">
        Logout
      </button>
      */}
      <Button variant="delete" size="sm">Logout</Button>
    </div>
  );
}



