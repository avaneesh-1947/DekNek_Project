import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      // Land to login page automatically after signup
      navigate("/login");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  const errorMessage = mutation.error?.response?.data?.message || mutation.error?.message;

  return (
    <div className="auth-container animate-fade-in">
      <div className="card auth-card glass">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join us to experience the future of security</p>

        {errorMessage && (
          <div style={{ 
            background: "rgba(239, 68, 68, 0.1)", 
            color: "#ef4444", 
            padding: "0.75rem", 
            borderRadius: "12px", 
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
            textAlign: "center",
            border: "1px solid rgba(239, 68, 68, 0.2)"
          }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="form-input"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="form-input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="form-input"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: "100%", marginTop: "1rem" }}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Creating account..." : "Sign Up"}
          </button>

          <p className="auth-subtitle" style={{ marginTop: "1.5rem", marginBottom: 0 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;