import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faArrowCircleUp,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  library.add(faBars, faArrowCircleUp, faClipboard);

  return (
    <div className="Title">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 className="title-header">
          <FontAwesomeIcon className="icon" icon="fa-solid fa-clipboard" />
          NC News
        </h1>
      </Link>
    </div>
  );
};

export default Header;
