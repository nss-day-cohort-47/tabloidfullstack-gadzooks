import React from "react";
import { Button } from "reactstrap";
import { Card, CardTitle, CardBody } from "reactstrap";
import { deleteComment } from "../../modules/commentManager";

const CommentCard = ({ comment, getComments }) => {
  const handleDelete = () => {
    if (window.confirm("Do you want to delete this comment?")) {
      deleteComment(comment.id).then(() => getComments());
    }
  };

  return (
    <Card className="CommentCard">
      <CardBody>
        <CardTitle>
          <strong>
            Subject: {comment.subject}
            {/* | Author: {comment.createDateTime} */}
          </strong>
        </CardTitle>
        <p>Comment: {comment.content}</p>
        <Button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default CommentCard;
