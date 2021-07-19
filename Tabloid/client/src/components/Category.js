import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
// import { deleteCategory } from "../modules/categoryManager";

const Category = ({ category, deleteCategories }) => {
    return (
        <Card >
            <CardBody>
                <p>{category.name}</p>
                <button onClick={() => deleteCategories(category.id)}>Delete</button>
            </CardBody>
        </Card>
    );
};

export default Category;