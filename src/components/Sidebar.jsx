import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const baseStyle =
    "px-3 py-2 rounded transition-colors";

  const activeStyle =
    "bg-zinc-800 text-white";

  const inactiveStyle =
    "text-zinc-300 hover:bg-zinc-800 hover:text-white";

  return (
    <div className="w-60 bg-zinc-900 text-zinc-200 p-5 space-y-4 border-r border-zinc-800">
      <h2 className="text-xl font-bold text-amber-700">SFA</h2>

      <nav className="flex flex-col gap-2">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/punch"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Punch In
        </NavLink>

        <NavLink
          to="/checkin"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Check In
        </NavLink>

        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Inventory
        </NavLink>

        <NavLink
          to="/routes"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Routes
        </NavLink>

      </nav>
    </div>
  );
}
