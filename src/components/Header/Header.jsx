import React from "react";
import "./Header.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faArrowCircleUp,
  hello,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  library.add(faBars, faArrowCircleUp, faClipboard);

  return (
    <div className="Title">
      <h1>
        <FontAwesomeIcon className="icon" icon="fa-solid fa-clipboard" />
        NC News
      </h1>
    </div>
  );
};

export default Header;
