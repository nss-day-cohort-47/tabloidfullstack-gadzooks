import { getToken } from "./authManager";

const baseUrl = "/api/comment";

//  get comments with a post id
export const getCommentsByPost = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/PostId?id=${id}`, {
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

//  adding a comment to a post
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

// delete a comment on a post
export const deleteComment = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
};
