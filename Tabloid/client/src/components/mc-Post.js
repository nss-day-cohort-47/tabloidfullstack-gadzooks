import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody } from "reactstrap";

export const PostCard = ({ post }) => {
    return (
        <Card>
            <CardBody>
                <h3>{post.title}</h3>
                <div>{post.content}</div>
                <div>{post.userProfile.fullName}</div>
                <div>{post.categoryId}</div>
            </CardBody>
        </Card>
    )
};

export default PostCard;

