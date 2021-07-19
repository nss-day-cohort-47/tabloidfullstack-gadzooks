import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getPostById, updatePost } from "../modules/PostManager";

const PostEdit = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    const getPostToEdit = (id) => {
        getPostById(id).then(post => setPost(post));
    }

    useEffect(() => {
        getPostToEdit(id);
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        console.log("value", value);
        console.log("param", id);

        const postCopy = { ...post };
        postCopy[key] = value;
        setPost(postCopy);

    };

    const handleSave = (evt) => {
        evt.preventDefault();

        const editedPost = {
            id: post.id,
            title: post.title,
            content: post.content,
            imageLocation: post.imageLocation,
            categoryId: post.categoryId,
            publishDateTime: post.publishDateTime
        }

        updatePost(editedPost)
            .then(() => {
                history.push("/post");
            });
    };

    return (
        <>
            <Form>
                <FormGroup>
                    <Label>Post</Label>
                    <FormGroup>
                        <input type="hidden" name="id" id="id" value={post.id}></input>
                        <Input id="title" type="text" placeholder="post title" value={post.title} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="content" type="text" placeholder="post content" value={post.content} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input id="imageLocation" type="text" placeholder="image Url (optional)" value={post.imageLocation} onChange={handleInputChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="categoryId">Category Id</Label >
                        <select type="select" name="select" id="categoryId" value={post.categoryId} onChange={handleInputChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label>Publish Date</Label>
                        <br></br>
                        <input id="publishDateTime" type="date" value={post.publishDateTime} onChange={handleInputChange}></input>
                    </FormGroup>
                </FormGroup>
                <Button onClick={handleSave}>Submit</Button>
            </Form>
        </>
    );
}