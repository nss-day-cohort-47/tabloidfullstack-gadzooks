import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Form, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
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
                        <input id="dateTime" type="date" value={post.publishDateTime}></input>
                    </FormGroup>
                </FormGroup>
                <Button onClick={handleSave}>Submit</Button>
            </Form>
        </>
    );
};

export default PostForm;