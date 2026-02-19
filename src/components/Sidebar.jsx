import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  
  return (
    <div
      className={`
        ${isOpen ? "w-60" : "w-16"}
        h-screen
        bg-zinc-900
        text-zinc-200
        p-5
        border-r border-zinc-800
        transition-all duration-300
        overflow-hidden
        flex flex-col
      `}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        {isOpen && (
          <h2 className="text-xl font-bold text-amber-700">SFA</h2>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-zinc-400 hover:text-white cursor-pointer"
        >
          {isOpen ? "<-" : "->"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
  {[
    { to: "/punchin", label: "Punch In" },
    { to: "/checkin", label: "Check In" },
    { to: "/checkout", label: "Check Out" },
    { to: "/inventory", label: "Inventory" },
    { to: "/routes", label: "Routes" },
  ].map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) =>
        isOpen
          ? `px-3 py-2 rounded transition-colors ${
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`
          : "h-8"
      }
    >
      {isOpen && item.label}
    </NavLink>
  ))}
</nav>


    </div>
  );
}
