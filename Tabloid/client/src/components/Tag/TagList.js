import React, { useEffect, useState } from "react";
import Tag from './Tag';
import { Link } from "react-router-dom";
import { deleteTag, getAllTags } from "../../modules/tagManager";

const TagList = () => {
    const [tags, setTags] = useState([]);

    const getTags = () => {
        getAllTags().then(tags => setTags(tags));
    }

    const deleteAndSetTags = (tagId) => {
        deleteTag(tagId)
            .then(() => getAllTags().then(setTags))
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
                        <Tag tag={tag} key={tag.id} deleteAndSetTags={deleteAndSetTags} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TagList;
