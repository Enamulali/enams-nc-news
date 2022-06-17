import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";
import { FaBackward } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FaBackward />
        {" " + "back"}
      </button>
    </>
  );
};

export default BackButton;
