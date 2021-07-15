const baseUrl = '/api/tag';

export const getAllTags = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
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

export const deleteTag = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    });
};