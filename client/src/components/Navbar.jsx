import "../styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-icon">✉</span>
        <h2>ANAMIKA</h2>
      </div>

      <ul className="nav-links">
   <li>
  <Link
    to="/"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
  >
    Home
  </Link>
</li>
<li><Link to="/letters">Letters</Link></li>
<li><a href="#about">About</a></li>
      </ul>
<Link to="/write" className="write-btn">
  Write Letter
</Link>
<Link to="/random" className="random-btn">
  ✨ Random Letter
</Link>

    </nav>
  );
}

export default Navbar;