import { getToken } from "./authManager";

// eslint-disable-next-line no-unused-vars
const baseUrl = "/api/comment";

export const getCommentsByPost = (postId) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get comments."
        );
      }
    });
  });
};

export const addComment = (comment) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new comment."
        );
      }
    });
  });
};
