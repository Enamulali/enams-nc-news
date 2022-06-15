import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllTopics } from "../../utils/api";
import "./Topics.css";

const Topics = ({ setCurrentTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchAllTopics()
      .then((topicsFromApi) => {
        setTopics(topicsFromApi);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  return (
    <>
      <div className="topics-container">
        <h4>What do you want to read about? </h4>
        <ul className="topics-ul">
          {topics.map((topic) => {
            return (
              <li className="topics-li" key={topic.slug}>
                <Link to={`/articles/${topic.slug}`} key={topic.slug}>
                  <button className="view-btn" value={topic.slug}>
                    {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Topics;
