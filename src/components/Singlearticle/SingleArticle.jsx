import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import "./SingleArticle.css";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});

  const { articleId } = useParams();

  console.log(singleArticle);

  useEffect(() => {
    fetchArticleById(articleId).then((articleFromApi) => {
      setSingleArticle(articleFromApi);
    });
  }, [articleId]);

  return (
    <>
      <section className="article-container">
        <h2>{singleArticle.title}</h2>
        <p>{singleArticle.body}</p>
        <h4>Written by: {singleArticle.author}</h4>
        <p>{singleArticle.created_at}</p>
        <p>Votes: {singleArticle.votes}</p>
        <p>Comments: {singleArticle.comment_count}</p>
      </section>
    </>
  );
};

export default SingleArticle;
