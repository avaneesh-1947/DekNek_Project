import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/authService";

const PublicRoute = ({ children }) => {
  const { data: user, isLoading } = useQuery({
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

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
