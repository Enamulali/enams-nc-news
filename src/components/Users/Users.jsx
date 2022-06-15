import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../../utils/api";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <div className="users-container">
      <ul className="users-ul">
        {users.map((user) => {
          return (
            <li className="users-li" key={user.username}>
              <img className="user-img" src={user.avatar_url}></img>
              <p>{user.username}</p>
              <p className="users-name">{user.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
