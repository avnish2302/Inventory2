import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import CheckIn from "./pages/CheckIn";
import Inventory from "./pages/Inventory";
import PunchIn from "./pages/PunchIn";
import RoutesPage from "./pages/Routes";
import CheckOut from "./pages/CheckOut";
import MainLayout from "./layouts/MainLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* Layout wrapper */}
          <Route element={<MainLayout />}>
            <Route
              path="/checkin"
              element={<Navigate to="/checkin/basic" replace />}
            />
            <Route path="/checkin/:tab" element={<CheckIn />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/punchin" element={<PunchIn />} />
            <Route path="/routes" element={<RoutesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;