import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import CheckIn from "./pages/CheckIn";
import Inventory from "./pages/Inventory";
import PunchIn from "./pages/PunchIn";
import RoutesPage from "./pages/Routes";
import CheckOut from "./pages/CheckOut";
import MainLayout from "./layouts/MainLayout";
import GlobalStyles from "./styles/GlobalStyles";
import PunchOut from "./pages/PunchOut";
import { VehicleProvider } from "./contexts/VehicalContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <VehicleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<MainLayout />}>
              <Route path="/checkin" element={<Navigate to="/checkin/main" replace />}/>
              <Route path="/checkin/:tab" element={<CheckIn />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/punchin" element={<PunchIn />} />
              <Route path="/punchout" element={<PunchOut />} />
              <Route path="/routes" element={<RoutesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VehicleProvider>
    </>
  );
}

export default App;
