import {
  BrowserRouter,
  Routes as BrowserRouterRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import CheckIn from "./pages/CheckIn";
import Inventory from "./pages/Inventory";
import PunchIn from "./pages/PunchIn";
import CheckOut from "./pages/CheckOut";
import MainLayout from "./layouts/MainLayout";
import GlobalStyles from "./styles/GlobalStyles";
import PunchOut from "./pages/PunchOut";
import { VehicleProvider } from "./contexts/VehicalContext";
import Routes from "./pages/Routes";
import { CashProvider } from "./contexts/CashContext";
import { InventoryProvider } from "./contexts/InventoryContext";
import { ShopProvider } from "./contexts/ShopContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <ShopProvider>
        <InventoryProvider>
          <CashProvider>
            <VehicleProvider>
              <BrowserRouter>
                <BrowserRouterRoutes>
                  <Route path="/" element={<Login />} />
                  <Route element={<MainLayout />}>
                    <Route
                      path="/checkin"
                      element={<Navigate to="/checkin/main" replace />}
                    />
                    <Route path="/checkin/:tab" element={<CheckIn />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/punchin" element={<PunchIn />} />
                    <Route path="/punchout" element={<PunchOut />} />
                    <Route
                      path="/routes"
                      element={<Navigate to="/routes/self" replace />}
                    />
                    <Route path="/routes/:tab" element={<Routes />} />
                  </Route>
                </BrowserRouterRoutes>
              </BrowserRouter>
            </VehicleProvider>
          </CashProvider>
        </InventoryProvider>
      </ShopProvider>
    </>
  );
}

export default App;
