import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/Post'
export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getPostById = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
}

export const getAllPosts = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getAllPostsWithUserInfo = () => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/GetWithUserInfo`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json()));
};


export const addPost = (post) => {
    return getToken().then((token) =>
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(post)
        }).then(resp => resp.json()));
};

export const deletePost = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => resp.json()));
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