import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/authService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <div className="card glass" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div className="feature-icon" style={{ fontSize: "4rem", marginBottom: "1rem" }}>👤</div>
          <h2 className="auth-title" style={{ marginBottom: "0.5rem" }}>Your Profile</h2>
          <p className="auth-subtitle" style={{ marginBottom: "2rem" }}>Account information and details</p>
          
          <div style={{ textAlign: "left", background: "white", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <label className="form-label" style={{ fontWeight: 600 }}>Full Name</label>
              <p style={{ fontSize: "1.1rem", color: "var(--text-main)" }}>{user?.name}</p>
            </div>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <label className="form-label" style={{ fontWeight: 600 }}>Username</label>
              <p style={{ fontSize: "1.1rem", color: "var(--text-main)" }}>@{user?.username}</p>
            </div>
            
            <div>
              <label className="form-label" style={{ fontWeight: 600 }}>Email Address</label>
              <p style={{ fontSize: "1.1rem", color: "var(--text-main)" }}>{user?.email}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
