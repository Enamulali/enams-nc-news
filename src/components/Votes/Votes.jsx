import React, { useContext, useState } from "react";
import { patchArticleVotes } from "../../utils/api";
import { UserContext } from "../../contexts/User";
import "./Votes.css";
import { BiLike } from "react-icons/bi";

const Votes = ({ votes, articleId }) => {
  //creating a new votes state for optimistic rendering
  const [voteInc, setVoteInc] = useState(0);

  //useContext to disable guest from liking an article
  const { loggedInUser } = useContext(UserContext);

  //everytime like button pressed, state is incremented and patch is sent
  const handleClick = () => {
    setVoteInc((currVotes) => {
      return currVotes + 1;
    });
    patchArticleVotes(articleId, 1).catch((err) => {
      setVoteInc((currVotes) => {
        alert("we couldn't process your vote, vote again!");
        return currVotes - 1;
      });
    });
  };

  //onClick incVotes and then disable after voteInc > 0
  return (
    <>
      <div>
        <p className="comments-subheading">Votes: {votes + voteInc}</p>

        <button
          className="like-btn"
          onClick={handleClick}
          disabled={voteInc > 0 || loggedInUser.name === "Guest"}
        >
          <BiLike className="article-icon" /> Like
        </button>
      </div>
    </>
  );
};

export default Votes;
