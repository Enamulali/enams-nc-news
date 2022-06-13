import axios from "axios";

const api = axios.create({
  baseURL: "https://enams-nc-news-api.herokuapp.com/api",
});

export const fetchAllArticles = () => {
  return api.get(`/articles`).then((res) => {
    return res.data.articles;
  });
};

export const fetchAllTopics = () => {
  return api.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};
