import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  return (
    <Card>
      <CardBody>
        <h4>Subject: {comment.subject}</h4>
        <p>Title: {comment.content}</p>
      </CardBody>
    </Card>
  );
};

export default Comment;
