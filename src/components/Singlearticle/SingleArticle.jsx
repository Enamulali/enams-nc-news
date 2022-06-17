import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import Votes from "../Votes/Votes";
import BackButton from "../Backbutton/BackButton";
import "./SingleArticle.css";
import Comments from "../Comments/Comments";
import PostComment from "../Comments/PostComment";
import Expandable from "../Expandable/Expandable";
import { BiCommentDetail } from "react-icons/bi";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [errDetail, setErrDetail] = useState("");
  const [didCommentPost, setDidCommentPost] = useState(false);
  const comments = useRef(null);

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

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: "smooth",
    });
  };

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
          <div>
            <p className="comments-subheading">
              Comments: {singleArticle.comment_count}
            </p>
            <button
              className="comment-btn"
              onClick={() => handleScroll(comments)}
            >
              <BiCommentDetail className="article-icon" /> View
            </button>
          </div>
        </section>
        <h4>Written by: {singleArticle.author}</h4>

        <p>{singleArticle.created_at}</p>
      </section>

      <section ref={comments} className="comments-container">
        <PostComment
          didCommentPost={didCommentPost}
          setDidCommentPost={setDidCommentPost}
        />
        <div className="margin"></div>
        <Expandable
          buttontext={`Load ${singleArticle.comment_count} Comments ...`}
        >
          <Comments />
        </Expandable>
      </section>

      <div className="margin"></div>
    </>
  );
};

export default SingleArticle;
