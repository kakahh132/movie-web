import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo"> {/* Keep as "/" for home */}
            <span className="logo-main">CINEMAX</span>
            <span className="logo-dot">.</span>
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="nav-links">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tv">TV Shows</Link></li>
            <li><Link to="/genres">Genres</Link></li>
            <li><Link to="/Watchlist">Watchlist</Link></li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="search-bar">
            <input type="text" placeholder="Search movies..." />
          
          </div>
          <Link to="/Signup"className="signin-button">Sign In</Link>
        
        </div>
      </div>
    </header>
  );
};

export default Header;