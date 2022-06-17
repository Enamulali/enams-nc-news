import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { dateCalculator } from "../../utils/dateFormatter";
import CommentForm from "./CommentForm";

const PostComment = ({ didCommentPost, setDidCommentPost }) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [postedComment, setPostedComment] = useState({});

  if (didCommentPost) {
    return (
      <>
        <section>
          <ul className="comments-ul">
            <p className="comments-subheading">Posted</p>
            <li className="comments-card" key={postedComment.comment_id}>
              <div className="user-comment">
                <div className="user-info">
                  <HiOutlineUserCircle className="article-icon" />
                  <p className="comments-subheading">
                    {postedComment.author}
                    <span className="comments-date">
                      {dateCalculator(postedComment.created_at)}
                    </span>
                  </p>
                </div>
                <p className="comments-body">{postedComment.body}</p>
                <p className="comments-votes">Votes: {postedComment.votes}</p>
              </div>
            </li>
          </ul>
        </section>
      </>
    );
  }
  if (!didCommentPost) {
    return (
      <CommentForm
        className="hello"
        setPostedComment={setPostedComment}
        setDidCommentPost={setDidCommentPost}
        setInputUsername={setInputUsername}
        setInputBody={setInputBody}
        inputUsername={inputUsername}
        inputBody={inputBody}
        didCommentPost={didCommentPost}
      />
    );
  }
};

export default PostComment;
