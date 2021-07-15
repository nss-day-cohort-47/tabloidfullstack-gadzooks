import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, From, FromGroup, Label, Input, FormText, FormGroup } from "reactstrap";
import Post from "./mc-Post";
import { addPost, getAllPosts } from "../modules/PostManager";

const PostFrom = () => {
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    const getPosts = () => {
        getAllPosts().then(posts => setPosts(posts));
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
                    <Input type="text" placeholder="post title" value={post.title} onChange={handleInputChange}></Input>
                    <Input type="text" placeholder="post title" value={post.content} onChange={handleInputChange}></Input>
                    <Input type="text" placeholder="post title" value={post.url} onChange={handleInputChange}></Input>
                </FormGroup>
                <Button onClick={handleSave}>Submit</Button>
            </Form>
            <div>
                <div>
                    {posts.map((post) => (
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PostFrom;