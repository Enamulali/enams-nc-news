import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { fetchAllArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Topics from "../Topics/Topics";
import "./Articles.css";
import SortBy from "../Queries/SortBy";
import OrderBy from "../Queries/OrderBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByValue, setSortByValue] = useState("created_at");
  const [orderByValue, setOrderByValue] = useState("desc");
  const [searchTerm, setSearchTerm] = useSearchParams({
    sort_by: "",
    order: "",
  });

  const navigate = useNavigate();
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles(topic, sortByValue, orderByValue)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [topic, sortByValue, orderByValue]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Topics />
      <div className="articles-container">
        <ul className="articles-ul">
          <div className="filter-container">
            <SortBy
              sortByValue={sortByValue}
              setSortByValue={setSortByValue}
              setSearchTerm={setSearchTerm}
            />
            <OrderBy
              orderByValue={orderByValue}
              setOrderByValue={setOrderByValue}
              setSearchTerm={setSearchTerm}
              sortByValue={sortByValue}
            />
            <button
              className={topic ? "show-btn" : "hide-reset-btn"}
              onClick={() => {
                navigate(`/articles`);
              }}
            >
              RESET
            </button>
          </div>
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Articles;
