import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import Votes from "../Votes/Votes";
import BackButton from "../Backbutton/BackButton";

import "./SingleArticle.css";
import Comments from "../Comments/Comments";
import PostComment from "../Comments/PostComment";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [errDetail, setErrDetail] = useState("");

  const { articleId } = useParams();

  useEffect(() => {
    fetchArticleById(articleId)
      .then((articleFromApi) => {
        setSingleArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setErrMessage(err.response.data.msg);
        setErrDetail(err.response.data.detail);
      });
  }, [articleId]);

  if (isLoading && isError) {
    return (
      <div className="err-msg">
        <h1>⚠️{errMessage}</h1>
        <p>{errDetail}</p>
      </div>
    );
  }
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
        <PostComment />
        <Comments />
      </section>
    </>
  );
};

export default SingleArticle;
