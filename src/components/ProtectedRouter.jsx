import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}