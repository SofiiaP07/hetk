import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <div className="nav-logo">HETK</div>
          <p className="footer-tag">Every vendor. One invitation.</p>
        </div>

        <div className="footer-col">
          <span className="eyebrow">Site</span>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <span className="eyebrow">Get in touch</span>
          <a href="mailto:hello@hetk.app">hello@hetk.app</a>
          <span>Based remotely, booking everywhere</span>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Hetk. All rights reserved.</span>
        <span className="footer-stamp">ADMIT ONE · EVENT PLANNING · NO EXPIRY</span>
      </div>
    </footer>
  );
}

export default Footer;
