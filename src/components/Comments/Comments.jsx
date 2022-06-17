import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { deleteComment, fetchCommentsByArticle } from "../../utils/api";
import { dateCalculator } from "../../utils/dateFormatter";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
import { UserContext } from "../../contexts/User";

import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articleId } = useParams();
  const [didDelete, setDidDelete] = useState(false);

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchCommentsByArticle(articleId)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [articleId, didDelete]);

  const sortedComments = [...comments].sort((a, b) => {
    let da = new Date(a.created_at),
      db = new Date(b.created_at);
    return db - da;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="comments-container">
        <ul className="comments-ul">
          <p className="comment-counter">Comments: {comments.length}</p>
          {sortedComments.map((comment) => {
            return (
              <li className="comments-card" key={comment.comment_id}>
                <div className="user-comment">
                  <div className="user-info">
                    <HiOutlineUserCircle className="article-icon" />
                    <p className="comments-subheading">
                      {comment.author}
                      <span className="comments-date">
                        {dateCalculator(comment.created_at)}
                      </span>
                    </p>
                  </div>
                  <p className="comments-body">{comment.body}</p>
                  <p>
                    <BiLike className="article-icon" />
                    <span className="comments-votes"> {comment.votes}</span>
                  </p>
                  {loggedInUser.name === "Guest" ? (
                    <p>
                      <Link to={`/login`}> Login</Link> as {comment.author} to
                      delete
                    </p>
                  ) : (
                    <button
                      className="secondary-btn"
                      onClick={() => {
                        deleteComment(comment.comment_id);
                        alert(`comment ${comment.comment_id} deleted`);
                        setDidDelete((curr) => !curr);
                      }}
                    >
                      Delete
                    </button>
                  )}
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
