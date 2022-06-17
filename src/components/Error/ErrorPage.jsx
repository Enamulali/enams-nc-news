import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <>
      <img
        src={
          "https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp"
        }
        className="error-img"
        alt={"404-error"}
      />
      <h1 className="error-msg">Page not Found!</h1>
    </>
  );
};

export default ErrorPage;
