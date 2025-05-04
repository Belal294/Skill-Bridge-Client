
// src/routes/AppRoutes.jsx
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ResendActivation from "../pages/ResendActivation";
import ResetPassword from "../pages/ResetPassword";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import ConfirmOrderPage from "../pages/ConfirmOrderPage";
import Orders from "../pages/orders";
import PaymentPage from "../pages/PaymentPage";
import PaymentStatus from "../pages/PaymentStatus";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
        <Route path="/resend-activation" element={<ResendActivation />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="/payment/status" element={<PaymentStatus />} />
      </Route>

      {/* Private Dashboard Routes */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="confirm-order" element={<ConfirmOrderPage />} />
        <Route path="payment" element={<PaymentPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
