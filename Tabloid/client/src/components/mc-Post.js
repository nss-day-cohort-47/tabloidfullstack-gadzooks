import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export const PostCard = ({ post }) => {
    return (
        <Card>
            <CardBody>
                <h3>{post.title}</h3>
                <div>{post.content}</div>
                <div>{post.userProfile.fullName}</div>
                <div>{post.category.name}</div>
                <Link to={`/post/${post.id}`}><button>Details</button></Link>
            </CardBody>
        </Card>
    )
};

export default PostCard;

