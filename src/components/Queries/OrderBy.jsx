import React, { useEffect, useState } from "react";

const OrderBy = ({ setOrderByValue, setSearchTerm, sortByValue }) => {
  const [width, setWidth] = useState(window.innerWidth);

  console.log(width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAscClick = (e) => {
    setSearchTerm({ sort_by: sortByValue, order: e.target.value });
    setOrderByValue(e.target.value);
  };

  const handleDescClick = (e) => {
    setSearchTerm({ sort_by: sortByValue, order: e.target.value });
    setOrderByValue(e.target.value);
  };

  return (
    <>
      <div className="order-btn-container">
        <button onClick={handleAscClick} value="asc" className="order-btn">
          {width > 500 ? "ASC" : "ASC"}
        </button>
        <button onClick={handleDescClick} value="desc" className="order-btn">
          {width > 500 ? "DESC" : "DESC"}
        </button>
      </div>
    </>
  );
};

export default OrderBy;
