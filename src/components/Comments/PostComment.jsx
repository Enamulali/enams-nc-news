import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { postCommentByArticle } from "../../utils/api";
import { dateCalculator } from "../../utils/dateFormatter";

const PostComment = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [postedComment, setPostedComment] = useState({});
  const [didCommentPost, setDidCommentPost] = useState(false);

  const { articleId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = { username: inputUsername, body: inputBody };
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

  if (didCommentPost) {
    return (
      <>
        <section>
          <ul className="comments-ul">
            <li className="comments-card" key={postedComment.comment_id}>
              <div className="user-comment">
                <p className="comments-author">
                  {postedComment.author}
                  <span className="comments-date">
                    {dateCalculator(postedComment.created_at)}
                  </span>
                </p>
                <p className="comments-body">{postedComment.body}</p>
                <p className="comments-votes">Votes: {postedComment.votes}</p>
              </div>
            </li>
          </ul>
        </section>
      </>
    );
  }

  return (
    <>
      <form className="post-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => {
              setInputUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Comment:
          <textarea
            placeholder="I enjoyed your article!"
            value={inputBody}
            onChange={(e) => {
              setInputBody(e.target.value);
            }}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PostComment;
