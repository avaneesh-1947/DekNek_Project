import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container animate-fade-in">
        <section className="hero">
          <h1 className="hero-title">
            Secure Your Digital <br />
            <span style={{ color: "var(--primary)" }}>Identity</span> With Ease
          </h1>
          <p className="hero-subtitle">
            Experience the next generation of authentication. Simple, secure, and 
            lightning fast. Built for developers who care about user experience.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started Now</Link>
          </div>
        </section>

        <section className="features-grid">
          <div className="feature-card glass">
            <div className="feature-icon">AVA</div>
            <h3>Advanced Security</h3>
            <p>Industry-standard encryption and secure token handling to keep your data safe.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">NE</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance ensuring seamless authentication in milliseconds.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">ESH</div>
            <h3>Fully Responsive</h3>
            <p>A beautiful experience across all devices, from mobile to desktop.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;