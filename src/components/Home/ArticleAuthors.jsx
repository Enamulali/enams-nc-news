import React from "react";
import { Link } from "react-router-dom";
import Expandable from "../Expandable/Expandable";
import "./Home.css";

const ArticleAuthors = ({ articles, users }) => {
  return (
    <div className="user-articles-container">
      <h2 className="home-heading">View Articles by Author:</h2>
      <Expandable buttontext={"Show"}>
        <ul className="user-articles-ul">
          {users.map((user) => {
            return (
              <li className="user-articles-li" key={user.username}>
                <h5>{user.name}</h5>
                <img
                  className="user-img"
                  src={user.avatar_url}
                  alt={user.name}
                />
                <Expandable buttontext={"Show"}>
                  {articles.map((article) => {
                    return (
                      <Link
                        to={`articles/id/${article.article_id}`}
                        key={article.article_id}
                      >
                        <p>
                          {{ ...article }.author === { ...user }.username
                            ? article.title
                            : null}
                        </p>
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
