import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard';
import { getCurrentUserPosts } from '../modules/postManager';

export const CurrentUserPostList = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getCurrentUserPosts()
            .then(thePosts => {
                console.log(thePosts)
                setPosts(thePosts)
            })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="postList">
            {posts.map(post => {
                return <PostCard post={post} key={post.id} />
            })}
        </div>
    )

}