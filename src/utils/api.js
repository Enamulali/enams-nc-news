import axios from "axios";

const api = axios.create({
  baseURL: "https://enams-nc-news-api.herokuapp.com/api",
});

export const fetchAllArticles = (topic) => {
  let path = `/articles`;
  if (topic) {
    path += `?topic=${topic}`;
  }
  return api.get(path).then((res) => {
    return res.data.articles;
  });
};

export const fetchAllTopics = () => {
  return api.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const fetchArticleById = (id) => {
  return api.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};
