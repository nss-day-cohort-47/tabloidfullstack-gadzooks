import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import { getCommentsByPost } from "../../modules/commentManager";
import CommentCard from "./Comment";
import { getPostById } from "../../modules/PostManager";

// Display all comments related to the Post
const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const getPosts = () => {
    return getPostById(id).then((res) => setPost(res));
  };

  const fetchComments = () => {
    return getCommentsByPost(id).then((response) => setComments(response));
  };

  useEffect(() => {
    getPosts();
    fetchComments();
  }, []);

  return (
    <div className="container m-2">
      <div className="row justify-content-center">
        <Card>
          <CardBody>
            <p>
              <b>Title: </b>
              {post.title}
            </p>
            <p>
              <b>Image: </b>
              {post.headerImage}
            </p>
            <p>
              <b>Content: </b>
              {post.content}
            </p>
            <p>
              <b>Date: </b>
              {post.publishDateTime}
            </p>
            <p>
              <b>Author: </b>
              {post.userProfile?.fullName}
            </p>
            <Link to={`/comment/add/${post.id}`}>
              <Button className="btn btn-success">Add Comment</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
      <div className="row justify-content-center">
        {comments.map((comment) => (
          <CommentCard
            comment={comment}
            key={comment.id}
            getComments={fetchComments}
          />
        ))}
      </div>
    </div>
  );
};
export default CommentList;
