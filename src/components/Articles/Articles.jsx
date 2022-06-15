import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAllArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Topics from "../Topics/Topics";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles(topic)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [topic]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Topics />
      <div className="articles-container">
        <ul className="articles-ul">
          <button
            className={topic ? "show-reset-btn" : "hide-reset-btn"}
            onClick={() => {
              navigate(`/articles`);
            }}
          >
            RESET
          </button>
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Articles;
