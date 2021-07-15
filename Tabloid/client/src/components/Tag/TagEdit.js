import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Tag from './Tag';
import { getAllTags, getTagById, updateTag } from '../../modules/tagManager';

const TagEdit = () => {
    const [tag, setTag] = useState({});
    const [tags, setTags] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    const checkIfEdit = true;

    const getTags = () => {
        getAllTags().then(tags => setTags(tags));
    }

    const getTagToEdit = (tagId) => {
        getTagById(tagId).then(tag => setTag(tag));
    }

    useEffect(() => {
        getTags();
        getTagToEdit(id);
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        console.log("value", value);
        console.log("param", id);


        const tagCopy = { ...tag };

        tagCopy[key] = value;
        setTag(tagCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();

        const editedTag = {
            id: tag.id,
            name: tag.name
        }

        console.log(editedTag);

        updateTag(editedTag)
            .then(() => {
                // Navigate the user back to the home route
                history.push("/tag");
            });
    };

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Tag</Label>
                    <Input type="hidden" name="id" id="id" value={tag.id}></Input>
                    <Input type="text" name="name" id="name" placeholder="Tag Name..."
                        // value={tag.name}
                        onChange={handleInputChange} />
                </FormGroup>
                <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
            </Form>
            <div className="container">
                <div className="row justify-content-center">
                    {tags.filter(tag => tag.id !== parseInt(id)).map((tag) => (
                        <Tag tag={tag} key={tag.id} checkIfEdit={checkIfEdit} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default TagEdit;