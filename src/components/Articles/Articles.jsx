import React, { useEffect, useState } from "react";
import { fetchAllArticles } from "../../utils/api";
import ArticleCard from "../Articlecard/ArticleCard";
import Topics from "../Topics/Topics";
import "./Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTopic, setCurrentTopic] = useState("");

  useEffect(() => {
    fetchAllArticles(currentTopic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [currentTopic]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Topics setCurrentTopic={setCurrentTopic} />
      <div className="articles-container">
        <ul className="articles-ul">
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Articles;
