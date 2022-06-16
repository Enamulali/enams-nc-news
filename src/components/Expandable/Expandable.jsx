import React, { useState } from "react";
import "./Expandable.css";

const Expandable = ({ children, buttontext }) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <>
      {showChildren ? children : null}
      <button
        className="expandable-btn"
        onClick={() => setShowChildren((curr) => !curr)}
      >
        {!showChildren ? buttontext : "Hide"}
      </button>
    </>
  );
};

export default Expandable;
