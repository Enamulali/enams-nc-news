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

export const fetchArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return api.patch(`/articles/${article_id}`, { inc_votes }).then((res) => {
    return res.data;
  });
};

export const fetchCommentsByArticle = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentByArticle = (article_id, input) => {
  return api.post(`/articles/${article_id}/comments`, input).then((res) => {
    return res.data.addedComment;
  });
};
