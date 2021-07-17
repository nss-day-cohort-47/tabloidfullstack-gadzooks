import React from "react";
import { Button } from "reactstrap";

import { Card, CardBody } from "reactstrap";

const Comment = ({ comment }) => {
  return (
    <Card>
      <CardBody>
        <h2>Subject: {comment.subject}</h2>
        <p>Title: {comment.content}</p>
        <Button color="info">Edit</Button>{" "}
      </CardBody>
    </Card>
  );
};

export default Comment;
