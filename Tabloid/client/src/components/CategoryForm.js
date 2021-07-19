import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Category from './Category';
import { addCategory, getAllCategories } from '../modules/categoryManager';

const CategoryForm = () => {
    const [category, setCategory] = useState({ name: '' });
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    const getCategories = () => {
        getAllCategories().then(categories => setCategories(categories));
    }

    useEffect(() => {
        getCategories();
    }, []);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const categoryCopy = { ...category };

        categoryCopy[key] = value;
        setCategory(categoryCopy);
    };

    const handleSave = (evt) => {
        evt.preventDefault();
        addCategory(category).then(() => {
            // Navigate the user back to the home route
            history.push("/category");
        });
    };

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">Category</Label>
                    <Input type="text" name="name" id="name" placeholder="Category Name..."
                        value={category.name}
                        onChange={handleInputChange} />
                </FormGroup>
                <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
            </Form>
            <div className="container">
                <div className="row justify-content-center">
                    {categories.map((category) => (
                        <Category category={category} key={category.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryForm;
