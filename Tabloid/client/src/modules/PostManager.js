import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/Post'
export const getToken = () => firebase.auth().currentUser.getIdToken();


export const getAllPosts = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getAllPostsWithUserInfo = () => {
    return fetch(`${baseUrl}/GetWithUserInfo`)
        .then((res) => res.json())
};


export const addPost = (post) => {
    return fetch(baseUrl, {
        method: "POST",
        Headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post)
    });
}

export const deletePost = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    });
};

export const getCurrentUserPosts = () => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/myposts`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json()));
}