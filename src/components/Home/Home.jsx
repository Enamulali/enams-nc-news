import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/User";
import {
  fetchAllArticles,
  fetchAllTopics,
  fetchAllUsers,
} from "../../utils/api";
import ArticleAuthors from "./ArticleAuthors";
import ArticleTopics from "./ArticleTopics";
import "./Home.css";

const Home = () => {
  const { loggedInUser } = useContext(UserContext);
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
    fetchAllUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
    fetchAllTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <>
      <div className="login-container">
        <h1 className="welcome-msg">Welcome {loggedInUser.name}</h1>
        <Link to={"/login"}>
          <button
            className={
              loggedInUser.name === "Guest"
                ? "login-btn-home"
                : "login-btn-home-disabled"
            }
          >
            {loggedInUser.name === "Guest" ? "Click here to log in" : null}
          </button>
        </Link>
      </div>
      <ArticleAuthors articles={articles} users={users} />
      <ArticleTopics articles={articles} topics={topics} />{" "}
      <div className="user-articles-container">
        <Link to={`/articles`} style={{ textDecoration: "none" }}>
          <h2 className="home-heading">View All Articles</h2>{" "}
        </Link>
      </div>
    </>
  );
};

export default Home;
