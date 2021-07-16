import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
import Post from "./mc-Post";
import { addPost, getAllPosts, getAllPostsWithUserInfo } from "../modules/PostManager";

const PostForm = () => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const history = useHistory();


    const getPosts = () => {
        getAllPosts().then(posts => setPosts(posts));
    }

    const getPostsWithUserInfo = () => {
        getAllPostsWithUserInfo().then(posts => setPosts(posts));
    }

    useEffect(() => {
        getPosts();
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const postCopy = { ...post };

        postCopy[key] = value;
        setPost(postCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addPost(post).then(() => {
            history.push("/Post");
        });
    };


    return (
        <>
            <Form>
                <FormGroup>
                    <Label>Post</Label>
                    <FormGroup>
                        <Input type="text" placeholder="post title" value={post.title} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" placeholder="post content" value={post.content} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" placeholder="post url" value={post.url} onChange={handleInputChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Category Id</Label>
                        <Input type="select" name="select" id="exampleSelect" value={post.categoryId}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Publish Date</Label>
                        <br></br>
                        <input type="date" value={post.publishDateTime}></input>
                    </FormGroup>
                </FormGroup>
                <Button onClick={handleSave}>Submit</Button>
            </Form>
        </>
    );
};

export default PostForm;