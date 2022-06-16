import React from "react";

const OrderBy = ({
  orderByValue,
  setOrderByValue,
  setSearchTerm,
  sortByValue,
}) => {
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
      <button onClick={handleAscClick} value="asc" className="show-btn">
        ASC
      </button>
      <button onClick={handleDescClick} value="desc" className="show-btn">
        DESC
      </button>
    </>
  );
};

export default OrderBy;
