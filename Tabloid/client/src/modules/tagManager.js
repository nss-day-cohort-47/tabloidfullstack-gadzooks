import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/tag';
export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getAllTags = () => {
    return getToken().then((token) =>
        fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }))
        .then((res) => res.json())
};

export const getTagById = (tagId) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${tagId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }))
        .then((res) => res.json())
};

export const addTag = (tag) => {
    return getToken().then((token) =>
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(tag)
        }));
};

export const updateTag = (editedTag) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${editedTag.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editedTag)
        }));
}

export const deleteTag = (id) => {
    return getToken().then((token) =>
        fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }));
};