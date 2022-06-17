import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { postCommentByArticle } from "../../utils/api";
import { UserContext } from "../../contexts/User";

const CommentForm = ({
  setPostedComment,
  setDidCommentPost,
  setInputUsername,
  setInputBody,
  inputBody,
  inputUsername,
  didCommentPost,
}) => {
  const { articleId } = useParams();

  const { loggedInUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = { username: loggedInUser.username, body: inputBody };
    postCommentByArticle(articleId, input)
      .then((postedCommentFromApi) => {
        console.log(postedCommentFromApi);
        setPostedComment(postedCommentFromApi);
        setDidCommentPost(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loggedInUser.username === "Guest" ? (
        <Link to={`/login`}>
          <h3 className="comment-form-container">Login to post a comment!</h3>
        </Link>
      ) : (
        <form className="comment-form-container" onSubmit={handleSubmit}>
          <label>
            Posting comment as:
            <input
              className="comment-form-input"
              type="text"
              value={loggedInUser.username}
              onChange={(e) => {
                setInputUsername(e.target.value);
              }}
            />
          </label>
          <label>
            Comment:
            <textarea
              className="comment-form-textarea"
              placeholder="I enjoyed your article!"
              value={inputBody}
              onChange={(e) => {
                setInputBody(e.target.value);
              }}
            ></textarea>
          </label>
          <button className="like-btn" type="submit">
            {!didCommentPost ? "Submit" : "Posted!"}
          </button>
        </form>
      )}
    </>
  );
};

export default CommentForm;
