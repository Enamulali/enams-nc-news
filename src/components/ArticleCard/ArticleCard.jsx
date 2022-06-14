import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <li key={article.article_id}>
        <h3>{article.title}</h3>
        <p className="article-topic">
          Topic:
          {" " + article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
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
      </li>
    </div>
  );
};

export default ArticleCard;
