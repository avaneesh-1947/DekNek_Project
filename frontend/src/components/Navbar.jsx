import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe, logoutUser } from "../services/authService";

const Navbar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: user } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false
  });

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(["me"], null);
      navigate("/login");
    }
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar glass">
      <Link to="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>DekNek</Link>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        
        {!user ? (
          <>
            <Link to="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="nav-link" onClick={() => setIsMenuOpen(false)}>Signup</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>Profile</Link>
            <button
              onClick={() => {
                logoutMutation.mutate();
                setIsMenuOpen(false);
              }}
              className="btn btn-danger"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;