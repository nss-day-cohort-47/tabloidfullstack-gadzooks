import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPost } from "../../modules/commentManager";
import Comment from "./Comment";

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  console.log(postId);
  useEffect(() => {
    getCommentsByPost(postId).then(setComments);
  }, [postId]);

  return (
    <>
      <h1>Post Comments:</h1>
      <div className="container">
        <div className="row justify-content-center">
          {comments.map((comment) => (
            <Comment comment={comment} key={comment.Id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentList;
