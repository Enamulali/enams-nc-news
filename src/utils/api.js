import axios from "axios";

const api = axios.create({
  baseURL: "https://enams-news-api.onrender.com/api",
});

export const fetchAllArticles = (topic, sort_by, order) => {
  return api
    .get(`/articles`, { params: { topic, sort_by, order } })
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.dir(err, "ERR");
    });
};

export const fetchAllTopics = () => {
  return api
    .get(`/topics`)
    .then((res) => {
      return res.data.topics;
    })
    .catch((err) => {
      console.dir(err, "ERR");
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

export const fetchAllUsers = () => {
  return api.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((res) => {
    console.log(res);
  });
};

export const fetchUserByUsername = (username) => {
  return api.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};
