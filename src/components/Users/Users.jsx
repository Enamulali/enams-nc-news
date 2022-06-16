import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import { fetchAllUsers } from "../../utils/api";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser } = useContext(UserContext);
  //button text change when clicked
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  useEffect(() => {
    let myFunc;
    const navigateFunc = () => {
      navigate("/");
    };

    const timedNavigate = () => {
      myFunc = setTimeout(navigateFunc, 1000);
    };

    if (isClicked) {
      timedNavigate();
    }
  });

  return (
    <div className="users-container">
      <h2>Select a user below:</h2>
      <ul className="users-ul">
        {users.map((user) => {
          return (
            <li className="users-li" key={user.username}>
              <img
                className="user-img"
                src={user.avatar_url}
                alt={user.name}
              ></img>
              <p>{user.username}</p>
              <p className="users-name">{user.name}</p>
              <button
                className="login-btn"
                onClick={() => {
                  setLoggedInUser(user);
                  setIsClicked(true);
                }}
              >
                {!isClicked ? "Start" : "Success!"}
              </button>
              <p>{isClicked ? "Redirecting..." : null}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
