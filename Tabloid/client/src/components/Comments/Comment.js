import React from "react";
import { Card, CardBody } from "reactstrap";

const Comment = ({ comment }) => {
  return (
    <Card>
      <CardBody>
        <h2>Subject: {comment.subject}</h2>
        <p>Title: {comment.content}</p>
      </CardBody>
    </Card>
  );
};

export default Comment;
