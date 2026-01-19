import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  // Decode token to check role
  const userRole = JSON.parse(atob(token.split(".")[1])).role;

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
