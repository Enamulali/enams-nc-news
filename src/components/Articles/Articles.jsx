import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { fetchAllArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Topics from "../Topics/Topics";
import "./Articles.css";
import SortBy from "../Queries/SortBy";
import OrderBy from "../Queries/OrderBy";
import { MdRefresh } from "react-icons/md";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByValue, setSortByValue] = useState("created_at");
  const [orderByValue, setOrderByValue] = useState("desc");
  const [searchTerm, setSearchTerm] = useSearchParams({
    sort_by: "",
    order: "",
  });
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [errDetail, setErrDetail] = useState("");

  const navigate = useNavigate();
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles(topic, sortByValue, orderByValue)
      .then((articlesFromApi) => {
        if (articlesFromApi.length !== 0) {
          setArticles(articlesFromApi);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [topic, sortByValue, orderByValue]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return (
      <>
        <h1 className="error-msg">Oops! Something went wrong.</h1>
        <h1 className="error-msg">Check Category.</h1>
      </>
    );
  }

  return (
    <>
      <div className="filter-container">
        <Topics />
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
      </div>
      <button
        className={topic ? "show-btn" : "hide-reset-btn"}
        onClick={() => {
          navigate(`/articles`);
        }}
      >
        <MdRefresh className="article-icon" />
        reset
      </button>
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
