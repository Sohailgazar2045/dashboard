import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsMangementPage from "./pages/ParkingManagementPage";
import CustomerPage from "./pages/CustomerPage";
import BookingsPage from "./pages/BookingsPage";
import HotelMangementPage from "./pages/HotelMangementPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import LocationPage from "./pages/LocationPage";

function App() {
  const location = useLocation();

  // Pages where the sidebar should be hidden
  const noSidebarPaths = ["/login", "/register", "/forgot-password"];
  const isAuthPage = noSidebarPaths.includes(location.pathname);

  return (
    <div className="flex h-screen bg-white text-gray-900 overflow-hidden">
      {!isAuthPage && <Sidebar />}
      <div
        className={`${
          isAuthPage
            ? "flex justify-center items-center w-full"
            : "flex-grow overflow-auto"
        }`}
      >
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route
            path="/parking-management"
            element={<ProductsMangementPage />}
          />
          <Route path="/hotel-management" element={<HotelMangementPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/revenue-analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/location-overview" element={<LocationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgetPasswordPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
