import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-200">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Main content area */}
        <div className="flex-1 p-6 bg-zinc-950">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
