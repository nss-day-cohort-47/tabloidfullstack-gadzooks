import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
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
                <Link to={`/post/${post.id}`}><button>Details</button></Link>
                <Link to={`/post/edit/${post.id}`}><button>Edit</button></Link>
            </CardBody>
        </Card>
    )
};

export default PostCard;

