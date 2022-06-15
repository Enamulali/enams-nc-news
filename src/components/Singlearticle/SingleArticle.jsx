import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import Votes from "../Votes/Votes";
import BackButton from "../Backbutton/BackButton";

import "./SingleArticle.css";
import Comments from "../Comments/Comments";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { articleId } = useParams();

  useEffect(() => {
    fetchArticleById(articleId)
      .then((articleFromApi) => {
        setSingleArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [articleId]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BackButton />
      <section className="article-container">
        <h2>{singleArticle.title}</h2>
        <p>{singleArticle.body}</p>
        <section className="interaction-container">
          <Votes votes={singleArticle.votes} articleId={articleId} />
        </section>
        <h4>Written by: {singleArticle.author}</h4>
        <p>{singleArticle.created_at}</p>
        <Link to={`/articles/${articleId}/comments`}>
          <p>Comments: {singleArticle.comment_count}</p>
        </Link>
      </section>
      <section className="comments-container">
        <Comments />
      </section>
    </>
  );
};

export default SingleArticle;
