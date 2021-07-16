import React, { useState, useEffect } from 'react';
import { getPostById } from '../modules/PostManager';
import { useParams } from 'react-router';

export const PostDetails = () => {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    const getPost = () => {
        getPostById(postId)
            .then(thePost => {
                setPost(thePost)
            })
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Image URL: {post.imageLocation}</p>
            <br />
            <p>Written by: {post.userProfile?.displayName}</p>
            <p>Created: {post.createDateTime}</p>
            <p>Published: {post.publishDateTime}</p>
        </div>
    )
}