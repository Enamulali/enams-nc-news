import React from "react";
import { Link } from "react-router-dom";
import { dateCalculator } from "../../utils/dateFormatter";
import "./Articles.css";
import { MdOutlineTopic, MdFavoriteBorder, MdPerson } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

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
        <div className="info-container">
          <p className="article-date">{dateCalculator(article.created_at)}</p>
          <p className="article-date">
            <MdPerson className="article-icon" />
            {" " + article.author}
          </p>
        </div>
        <p className="article-topic">
          <MdOutlineTopic className="article-icon" />:{" "}
          <Link to={`/articles/${article.topic}`}>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </Link>
        </p>
        <p className="article-body">
          {article.body.slice(0, 100) + "..."}
          <button className="read-btn">Read More</button>
        </p>
        <div className="info-container">
          <p className="article-votes">
            <MdFavoriteBorder className="article-icon-like" />
            <span>{" " + article.votes}</span>
          </p>
          <p className="comment-count">
            <FaRegComment className="article-icon-comment" />
            <span>{" " + article.comment_count}</span>
          </p>
        </div>
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
