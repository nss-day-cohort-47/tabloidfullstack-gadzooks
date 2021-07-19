import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = '/api/tag';
export const getToken = () => firebase.auth().currentUser.getIdToken();

export const getAllTags = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getTagById = (tagId) => {
    return fetch(`${baseUrl}/${tagId}`)
        .then(res => res.json())
};

export const addTag = (tag) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tag),
    });
};

export const updateTag = (editedTag) => {
    return fetch(`${baseUrl}/${editedTag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedTag)
    });
}

export const deleteTag = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    });
};