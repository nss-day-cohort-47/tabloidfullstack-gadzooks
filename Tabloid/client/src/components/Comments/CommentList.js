import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "reactstrap";
import { getCommentsByPost } from "../../modules/commentManager";
import Comment from "./Comment";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    getCommentsByPost(postId).then(setComments);
  }, [postId]);

  return (
    <>
      <h1>Post Comments:</h1>
      <div className="container">
        <div className="row justify-content-center">
          {comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>

        <Button className="addComment">
          <Link className="a  addComment" to={`/comment/add/${postId}`}>
            Add Comment
          </Link>
        </Button>
      </div>
    </>
  );
};

export default CommentList;
