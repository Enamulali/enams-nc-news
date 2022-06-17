import React, { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { RiLogoutBoxFill } from "react-icons/ri";

const Logout = () => {
  const { setLoggedInUser } = useContext(UserContext);

  return (
    <>
      <a
        className="Nav-link"
        onClick={() => {
          setLoggedInUser({
            username: "Guest",
            name: "Guest",
            avatar_url: "https://www.computerhope.com/jargon/g/guest-user.jpg",
          });
        }}
      >
        <RiLogoutBoxFill className="Nav-icon" />
      </a>
    </>
  );
};

export default Logout;
