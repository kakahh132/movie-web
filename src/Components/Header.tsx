import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/Login" className="logo"> {/* Changed from "/" to "/Login" */}
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
            <button><i className="fas fa-search"></i></button>
          </div>
          <button className="account-btn">
            <i className="fas fa-user"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;