import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addComment, getCommentsByPost } from "../../modules/commentManager";

const CommentAddForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [newComment, setNewComment] = useState({
    postId: id,
    subject: "",
    content: "",
  });

  const handleInputChange = (event) => {
    let value = event.target.value;
    let selectedValue = event.target.id;
    let newCommentCopy = { ...newComment };
    newCommentCopy[selectedValue] = value;
    newCommentCopy.postId = id;
    setNewComment(newCommentCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(newComment)
      .then(() => getCommentsByPost(id))
      .then(() => history.push(`/comment/PostId/${id}`));
  };

  return (
    <Form>
      <h2>New Comment</h2>
      <FormGroup>
        <Label for="subject">Subject</Label>
        <Input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
          value={newComment.subject}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="text"
          name="content"
          id="content"
          placeholder="Enter Message Here"
          required
          value={newComment.content}
          onChange={handleInputChange}
        />
      </FormGroup>

      <Button className="btn btn-success" onClick={handleSubmit}>
        Submit
      </Button>
      <Button
        className="btn btn-danger"
        onClick={() => history.push(`/comment/PostId/:id`)}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default CommentAddForm;
