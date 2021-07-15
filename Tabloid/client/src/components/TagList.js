import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { Link } from "react-router-dom";
import { getAllTags } from "../modules/tagManager";

const TagList = () => {
    const [tags, setTags] = useState([]);

    const getTags = () => {
        getAllTags().then(tags => setTags(tags));
    }

    useEffect(() => {
        getTags();
    }, []);

    return (
        <>
            <Link to="/tag/create">Create Tag</Link>
            <div className="container">
                <div className="row justify-content-center">
                    {tags.map((tag) => (
                        <Tag tag={tag} key={tag.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TagList;
