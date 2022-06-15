import React from "react";
import { Link } from "react-router-dom";
import { dateCalculator } from "../../utils/dateFormatter";
import "./Articles.css";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <li className="articles-card" key={article.article_id}>
        <Link
          to={`/articles/id/${article.article_id}`}
          style={{ textDecoration: "none" }}
        >
          <h3 className="article-title">{article.title}</h3>
        </Link>
        <p className="article-date">{dateCalculator(article.created_at)}</p>
        <p className="article-topic">
          Topic:{" "}
          <Link to={`/articles/${article.topic}`}>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </Link>
        </p>
        <p className="article-body">
          {article.body.slice(0, 100) + "..."}
          <button className="read-btn">Read More</button>
        </p>
        <p className="article-votes">
          Votes: <span>{article.votes}</span>
        </p>
        <p className="comment-count">
          Comment Count: <span>{article.comment_count}</span>
        </p>
        <Link
          to={`/articles/id/${article.article_id}`}
          key={article.article_id}
        >
          Click Here to read more
        </Link>
      </li>
    </div>
  );
};

export default ArticleCard;
