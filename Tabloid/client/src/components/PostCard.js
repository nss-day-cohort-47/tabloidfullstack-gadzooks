import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

export const PostCard = ({ post }) => {
    return (
        <Card>
            <CardBody>
                <h3>{post.title}</h3>
                <h5>by {post.userProfile.displayName}</h5>
                <p>{post.content}</p>
                <Link to={`/post/${post.id}`}><button>Details</button></Link>
            </CardBody>
        </Card>
    )
}