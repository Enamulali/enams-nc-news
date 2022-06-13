import React, { useEffect, useState } from "react";
import { fetchAllArticles } from "../../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="articles-container">
        <ul className="articles-ul">
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <h3>{article.title}</h3>
                <p className="article-topic">
                  Topic:
                  {" " +
                    article.topic.charAt(0).toUpperCase() +
                    article.topic.slice(1)}
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
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Articles;
