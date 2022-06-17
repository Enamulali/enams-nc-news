import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { AiFillHome, AiFillRead } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";
import Logout from "../Users/Logout";

const Navbar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="Nav">
      <nav>
        <Link className="Nav-link" to="/">
          <AiFillHome className="Nav-icon" />
        </Link>
        <Link className="Nav-link" to="/articles">
          <AiFillRead className="Nav-icon" />
        </Link>
        {loggedInUser.name !== "Guest" ? (
          <Logout className="Nav-link" />
        ) : (
          <Link className="Nav-link" to="/login">
            <RiLoginBoxFill className="Nav-icon" />
          </Link>
        )}

        <Link className="Nav-link" to="/login">
          <img className="Nav-user-img" src={loggedInUser.avatar_url} />{" "}
          <span>{loggedInUser.username}</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
