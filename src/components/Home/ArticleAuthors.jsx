import React, { useState } from "react";
import { Link } from "react-router-dom";
import Expandable from "../Expandable/Expandable";
import "./Home.css";

const ArticleAuthors = ({ articles, users }) => {
  const [visibleArticles, setVisibleArticles] = useState(3);

  return (
    <div className="user-articles-container">
      <h2 className="home-heading">View Latest Articles by Author:</h2>
      <Expandable buttontext={"Show"}>
        <ul className="user-articles-ul">
          {users.map((user) => {
            const userArticles = articles.filter(
              (article) => article.author === user.username
            );
            return (
              <li className="user-articles-li" key={user.username}>
                <div className="user-info">
                  <img
                    className="user-img"
                    src={user.avatar_url}
                    alt={user.name}
                  />
                  <h5>{user.name}</h5>
                </div>
                <Expandable buttontext={"Show"}>
                  {userArticles.slice(0, visibleArticles).map((article) => {
                    return (
                      <Link
                        to={`articles/id/${article.article_id}`}
                        key={article.article_id}
                      >
                        <p>{article.title}</p>
                      </Link>
                    );
                  })}
                </Expandable>
              </li>
            );
          })}
        </ul>
      </Expandable>
    </div>
  );
};

export default ArticleAuthors;
