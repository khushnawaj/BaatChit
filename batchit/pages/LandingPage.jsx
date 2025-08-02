import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../src/index.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Connect with <span>Baat-Chit</span>
        </h1>
        <p className="hero-subtitle">
          A modern messaging platform that brings people together with secure, real-time communication.
        </p>
        <div className="cta-buttons">
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn" style={{ backgroundColor: 'var(--pure-white)', color: 'var(--maroon)' }}>
            Login
          </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose Baat-Chit</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3 className="feature-title">Real-time Messaging</h3>
            <p className="feature-description">
              Chat instantly with friends and colleagues with our lightning-fast messaging system.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">End-to-End Encryption</h3>
            <p className="feature-description">
              Your conversations are private and secure with our advanced encryption technology.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3 className="feature-title">Cross-Platform</h3>
            <p className="feature-description">
              Access your messages from any device, anywhere, anytime.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Baat-Chit has completely transformed how our team communicates. The interface is intuitive and the reliability is unmatched."
          </p>
          <div className="testimonial-author">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Sarah Johnson" 
              className="testimonial-avatar"
            />
            <div>
              <p className="testimonial-name">Sarah Johnson</p>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Baat-Chit</div>
            <p>
              Connecting people through seamless communication since 2023.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Baat-Chit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;