import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllTopics } from "../../utils/api";
import "./Topics.css";

const Topics = ({ setCurrentTopic }) => {
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  const handleChange = (value) => {
    navigate(`/articles/${value}`);
  };

  return (
    <>
      <label>
        filter topic:
        <select
          className="dropdown"
          onChange={(e) => handleChange(e.target.value)}
        >
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};

export default Topics;
