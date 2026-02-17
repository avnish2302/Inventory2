import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import CheckIn from "./pages/CheckIn";
import Inventory from "./pages/Inventory";
import PunchIn from "./pages/PunchIn";
import RoutesPage from "./pages/Routes";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-200 min-h-screen">

      <BrowserRouter>
        <Routes>

          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* Layout wrapper */}
          <Route element={<MainLayout />}>

            {/*Check-in routes */}
            <Route path="/checkin" element={<Navigate to="/checkin/basic" />} />
            <Route path="/checkin/:tab" element={<CheckIn />} />

            <Route path="/inventory" element={<Inventory />} />
            <Route path="/punchin" element={<PunchIn />} />
            <Route path="/routes" element={<RoutesPage />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
