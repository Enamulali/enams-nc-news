import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Nav">
      <nav>
        <Link className="Nav-link" to="/">
          Home
        </Link>
        <Link className="Nav-link" to="/articles">
          Articles
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
