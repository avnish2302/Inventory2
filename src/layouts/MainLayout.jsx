import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="h-screen flex bg-zinc-950 text-zinc-200 overflow-hidden">

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col h-full transition-all duration-300">

        <Navbar />

        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
