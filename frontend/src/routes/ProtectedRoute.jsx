import { Navigate ,Outlet} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/authService";

const ProtectedRoute = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false
  });

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;