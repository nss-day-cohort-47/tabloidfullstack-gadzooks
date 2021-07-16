import React, { useEffect, useState } from "react";
import Post, { PostCard } from "./mc-Post";
import { Link } from "react-router-dom";
import { deletePost, getAllPostsWithUserInfo } from "../modules/PostManager";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    // const getPosts = () => {
    //     getAllPosts().then(posts => setPosts(posts));
    // }
    const getPostsWithUserInfo = () => {
        getAllPostsWithUserInfo().then(posts => setPosts(posts));
    }

    const deleteAndSetPosts = (postId) => {
        deletePost(postId)
            .then(() => getPostsWithUserInfo())

    }

    useEffect(() => {
        getPostsWithUserInfo();
    }, []);

    return (
        <>
            <Link to="/post/create" > Create Post </Link>
            <div>
                <div>
                    {posts.map((post) => (
                        <PostCard post={post} key={post.id} deleteAndSetPosts={deleteAndSetPosts} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PostList;