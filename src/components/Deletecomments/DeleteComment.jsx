import React, { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { TiDelete } from "react-icons/ti";

const DeleteComment = ({ deleteComment, setDidDelete, comment }) => {
  const { loggedInUser } = useContext(UserContext);

  if (loggedInUser.username !== comment.author) {
    return null;
  }

  return (
    <>
      <button
        className="secondary-btn"
        onClick={() => {
          deleteComment(comment.comment_id);
          alert(`comment deleted!`);
          setDidDelete((curr) => !curr);
        }}
      >
        {"Delete" + " "}
        <TiDelete className="delete-icon" />
      </button>
    </>
  );
};

export default DeleteComment;
