import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";

// Layouts
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

// Auth Pages
import Login from "../auth/Login";
import Register from "../auth/Register";

// User Pages
import  Home from "../moduls/user/home/Home";
import PackageList from "../moduls/user/packages/PackageList";
import PackageDetails from "../moduls/user/packages/PackageDetails";
import MyBookings from "../moduls/user/booking/MyBookings";

// Admin Pages
import AdminDashboard from "../moduls/admin/dashboard/AdminDashboard";
import ManagePackages from "../moduls/admin/packages/ManagePackages";
import ManageBookings from "../moduls/admin/bookings/ManageBookings";
import ManageUser from "../moduls/admin/users/ManageUser";
import ManageTransport from "../moduls/admin/transport/ManageTransport";
import ManageHotels from "../moduls/admin/hotels/ManageHotels";
import CreatePackage from "../moduls/admin/packages/CreatePackage";
import EditPackage from "../moduls/admin/packages/EditPackages";
const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="packages" element={<PackageList />} />

      {/* ================= USER ROUTES ================= */}
      <Route element={<ProtectedRoute role="User" />}>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        
          <Route path="packages/:id" element={<PackageDetails />} />
          <Route path="my-bookings" element={<ManageUser />} />
        </Route>
      </Route>

      {/* ================= ADMIN ROUTES ================= */}
      <Route element={<ProtectedRoute role="Admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="manage-packages" element={<ManagePackages />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          <Route path="manage-users" element={<ManageUser />} />
           <Route path="manage-transport" element={<ManageTransport />} />
           <Route path="manage-hotels" element={<ManageHotels />} />
           <Route path="create-package" element={<CreatePackage />} />
           <Route path="edit-package/:id" element={<EditPackage />} />

        </Route>
      </Route>

    </Routes>
  );
};

export default AppRoutes;