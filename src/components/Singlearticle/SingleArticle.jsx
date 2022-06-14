import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});

  const { articleId } = useParams();

  useEffect(() => {
    fetchArticleById(articleId).then((articleFromApi) => {
      setSingleArticle(articleFromApi);
    });
  }, []);

  return (
    <>
      <h2>{singleArticle.title}</h2>
      <p>{singleArticle.body}</p>
      <h4>Written by: {singleArticle.author}</h4>
      <p>{singleArticle.created_at}</p>
      <p>Votes: {singleArticle.votes}</p>
      <p>Comments: {singleArticle.comment_count}</p>
    </>
  );
};

export default SingleArticle;
