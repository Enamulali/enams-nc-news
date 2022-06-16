import React from "react";
import { Link } from "react-router-dom";
import Expandable from "../Expandable/Expandable";
import "./Home.css";

const ArticleTopics = ({ articles, topics }) => {
  return (
    <div className="user-articles-container">
      <h2 className="home-heading">View Articles by Topic:</h2>
      <Expandable buttontext={"Show"}>
        <ul className="user-articles-ul">
          {topics.map((topic) => {
            return (
              <li className="topic-articles-li" key={topic.slug}>
                <Link to={`/articles/${topic.slug}`}>
                  {" "}
                  <h5>{topic.slug}</h5>
                </Link>
                <Expandable buttontext={"Show"}>
                  {articles.map((article) => {
                    return (
                      <Link
                        to={`articles/id/${article.article_id}`}
                        key={article.article_id}
                      >
                        <p>
                          {{ ...article }.topic === { ...topic }.slug
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

export default ArticleTopics;
