import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllTopics } from "../../utils/api";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="topics-container">
        <ul className="topics-ul">
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <h3 className="topic-name">
                  {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                </h3>
                <p className="topic-description">{topic.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Topics;
