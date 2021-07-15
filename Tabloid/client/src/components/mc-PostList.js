import React, { useEffect, useState } from "react";
import Post, { PostCard } from "./mc-Post";
import { Link } from "react-router-dom";
import { getAllPostsWithUserInfo } from "../modules/PostManager";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    // const getPosts = () => {
    //     getAllPosts().then(posts => setPosts(posts));
    // }
    const getPostsWithUserInfo = () => {
        getAllPostsWithUserInfo().then(posts => setPosts(posts));
    }

    useEffect(() => {
        getPostsWithUserInfo();
    }, []);

    return (
        <>
            <Link> Create Post </Link>
            <div>
                <div>
                    {posts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default PostList;