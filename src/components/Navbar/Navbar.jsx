import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

const Navbar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="Nav">
      <nav>
        <Link className="Nav-link" to="/">
          Home
        </Link>
        <Link className="Nav-link" to="/articles">
          Articles
        </Link>
        <Link className="Nav-link" to="/login">
          <img className="Nav-user-img" src={loggedInUser.avatar_url} />{" "}
          <span>{loggedInUser.username}</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
