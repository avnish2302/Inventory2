<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CheckIn from "./pages/CheckIn";
import Inventory from "./pages/Inventory";
import PunchIn from "./pages/PunchIn";
import RoutesPage from "./pages/Routes";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-200 min-h-screen">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>

          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* Layout wrapper */}
          <Route element={<MainLayout />}>

            <Route path="/dashboard" element={<Dashboard />} />

            {/*Check-in routes */}
            <Route path="/checkin" element={<Navigate to="/checkin/basic" />} />
            <Route path="/checkin/:tab" element={<CheckIn />} />

            <Route path="/inventory" element={<Inventory />} />
            <Route path="/punch" element={<PunchIn />} />
            <Route path="/routes" element={<RoutesPage />} />

          </Route>

        </Routes>
      </BrowserRouter>
=======

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/punch" element={<PunchIn />} />
          <Route path="/routes" element={<RoutesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
>>>>>>> ed06820a01d41180439ee8fc7c6e2424b2ac8da8
    </div>
  );
}

export default App;
