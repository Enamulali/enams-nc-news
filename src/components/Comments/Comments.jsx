import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticle } from "../../utils/api";
import { dateCalculator } from "../../utils/dateFormatter";

import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articleId } = useParams();

  useEffect(() => {
    fetchCommentsByArticle(articleId)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
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
      <section className="comments-container">
        <ul className="comments-ul">
          {comments.map((comment) => {
            return (
              <li className="comments-card" key={comment.comment_id}>
                <div className="user-comment">
                  <p className="comments-author">
                    {comment.author}
                    <span className="comments-date">
                      {dateCalculator(comment.created_at)}
                    </span>
                  </p>
                  <p className="comments-body">{comment.body}</p>
                  <p className="comments-votes">Votes: {comment.votes}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Comments;
