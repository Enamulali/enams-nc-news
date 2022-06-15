import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/User";
import { fetchAllUsers } from "../../utils/api";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetchAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

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
                  setUser(user);
                }}
              >
                Start
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
