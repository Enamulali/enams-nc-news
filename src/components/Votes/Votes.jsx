import React, { useState } from "react";
import { patchArticleVotes } from "../../utils/api";
import "./Votes.css";

const Votes = ({ votes, articleId }) => {
  //creating a new votes state for optimistic rendering
  const [voteInc, setVoteInc] = useState(0);

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
      <p>Votes: {votes + voteInc}</p>

      <button className="like-btn" onClick={handleClick} disabled={voteInc > 0}>
        Like
      </button>
    </>
  );
};

export default Votes;
