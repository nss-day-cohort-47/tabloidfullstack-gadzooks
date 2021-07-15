const baseUrl = '/api/Post'

export const getAllPosts = () => {
    return fetch(baseUrl)
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