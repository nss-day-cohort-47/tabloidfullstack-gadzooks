import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Tag = ({ tag, deleteAndSetTags, checkIfEdit }) => {

    const history = useHistory();

    return (
        <Card >
            <CardBody>
                <p>{tag.name}</p>
                <button onClick={() => history.push(`/tag/edit/${tag.id}`)}>Edit</button>
                {/* //! THIS BREAK WON'T STAY */}
                <br></br>
                {(checkIfEdit)
                    ? null
                    : <button onClick={() => deleteAndSetTags(tag.id)}>Delete</button>}
            </CardBody>
        </Card>
    );
};

export default Tag;