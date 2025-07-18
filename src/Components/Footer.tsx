import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cinemax-footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <Link to="/" className="footer-logo">
            <span className="logo-main">CINEMAX</span>
            <span className="logo-dot">.</span>
          </Link>
          <p className="footer-tagline">Your ultimate movie experience</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Navigation</h3>
            <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/tv">TV Shows</Link></li>
              <li><Link to="/genres">Genres</Link></li>
               <li><Link to="/Watchlist">Watchlist</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Account</h3>
            <ul>
              <li><Link to="/Login">Sign In</Link></li>
              <li><Link to="/Signup">Create Account</Link></li>
              <li><Link to="/Watchlist">My Watchlist</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <ul>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Cinemax. All rights reserved.</p>
        <div className="footer-legal-links">
          <Link to="/help">Help Center</Link>
          <span className="divider">|</span>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;