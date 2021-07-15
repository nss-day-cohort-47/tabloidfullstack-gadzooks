import { getToken } from "./authManager";

// eslint-disable-next-line no-unused-vars
const baseUrl = "/api/comment";

export const getAllCommentsPost = (postId) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${postId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  });
};
