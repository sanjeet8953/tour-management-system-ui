import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const stored = localStorage.getItem("user");

  if (!stored) return <Navigate to="/login" />;

  const user = JSON.parse(stored);

  if (!user.jwt) return <Navigate to="/login" />;

  // If Admin trying to access user root
  if (user.role === "Admin" && window.location.pathname === "/") {
    return <Navigate to="/admin" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;