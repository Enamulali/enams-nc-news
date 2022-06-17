import React from "react";

const SortBy = ({ sortByValue, setSortByValue, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm({ sort_by: e.target.value });
    setSortByValue(e.target.value);
  };

  return (
    <>
      <label>
        sort by:
        <select
          className="dropdown"
          onChange={handleChange}
          value={sortByValue}
        >
          <option value="votes">votes</option>
          <option value="created_at">date</option>
          <option value="author">author</option>
          <option value="title">title</option>
        </select>
      </label>
    </>
  );
};

export default SortBy;
