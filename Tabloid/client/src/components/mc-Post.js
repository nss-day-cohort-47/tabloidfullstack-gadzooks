import React from "react";
import { useHistory } from "react-router";
import { Card, CardBody } from "reactstrap";

export const PostCard = ({ post }) => {
    return (
        <Card>
            <CardBody>
                <div>{post.title}</div>
                <div>{post.content}</div>
                <div>author</div>
                <div>category</div>
            </CardBody>
        </Card>
    )
};

export default PostCard;

