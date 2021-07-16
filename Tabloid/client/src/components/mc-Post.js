import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody } from "reactstrap";

export const PostCard = ({ post, deleteAndSetPosts }) => {
    return (
        <Card>
            <CardBody>
                <h3>{post.title}</h3>
                <div>{post.content}</div>
                <div>{post.userProfile.fullName}</div>
                <div>{post.category.name}</div>
                <br></br>
                <button onClick={() => deleteAndSetPosts(post.id)}>Delete</button>
            </CardBody>
        </Card>
    )
};

export default PostCard;

