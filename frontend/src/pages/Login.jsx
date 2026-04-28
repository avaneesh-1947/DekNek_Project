import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["me"], data);
      navigate("/");
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
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Please enter your details to sign in</p>

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
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="form-input"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
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
            {mutation.isPending ? "Signing in..." : "Sign In"}
          </button>

          <p className="auth-subtitle" style={{ marginTop: "1.5rem", marginBottom: 0 }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;