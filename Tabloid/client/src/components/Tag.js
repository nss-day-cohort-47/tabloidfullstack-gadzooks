import React from "react";
import { Card, CardBody } from "reactstrap";

const Tag = ({ tag, deleteAndSetTags }) => {


    return (
        <Card >
            <CardBody>
                <p>{tag.name}</p>
                <a>Edit</a>
                {/* //! THIS BREAK WON'T STAY */}
                <br></br>
                <button onClick={() => deleteAndSetTags(tag.id)}>Delete</button>
            </CardBody>
        </Card>
    );
};

export default Tag;