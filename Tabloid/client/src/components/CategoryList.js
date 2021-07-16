import React, { useEffect, useState } from "react";
import Category from './Category';
import { deleteCategory, getAllCategories } from "../modules/categoryManager";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then(categories => setCategories(categories));
    }

    const deleteCategories = (categoryId) => {
        deleteCategory(categoryId).then(() => getAllCategories().then(setCategories))
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {categories.map((category) => (
                        <Category category={category} key={category.id} deleteCategories={deleteCategories} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryList;
