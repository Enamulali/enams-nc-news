import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../contexts/User";
import { fetchUserByUsername } from "../utils/api";
import "./Profile.css";

const Profile = () => {
  const user = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUserByUsername(user.loggedInUser.username).then((user) => {
      setUserInfo(user);
    });
  }, [user]);

  return (
    userInfo && (
      <div>
        <h1>Welcome to your Profile!</h1>
        <img className="profile-img" src={userInfo.avatar_url} />
        <p>Username: {userInfo.username}</p>
        <p>Name: {userInfo.name}</p>
      </div>
    )
  );
};

export default Profile;
