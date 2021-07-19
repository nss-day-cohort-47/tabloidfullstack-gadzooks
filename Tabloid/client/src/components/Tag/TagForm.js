import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Tag from './Tag';
import { addTag, getAllTags } from '../../modules/tagManager';

const TagForm = () => {
    const [tag, setTag] = useState({ name: '' });
    // const [tags, setTags] = useState([]);
    const history = useHistory();

    // const getTags = () => {
    //     getAllTags().then(tags => setTags(tags));
    // }

    // useEffect(() => {
    //     getTags();
    // }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const tagCopy = { ...tag };

        tagCopy[key] = value;
        setTag(tagCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addTag(tag).then(() => {
            // Navigate the user back to the home route
            history.push("/tag");
        });
    };

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Tag</Label>
                    <Input type="text" name="name" id="name" placeholder="Tag Name..."
                        value={tag.name}
                        onChange={handleInputChange} />
                </FormGroup>
                <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
            </Form>
            {/* <div className="container">
                <div className="row justify-content-center">
                    {tags.map((tag) => (
                        <Tag tag={tag} key={tag.id} />
                    ))}
                </div>
            </div> */}
        </>
    );
};

export default TagForm;
