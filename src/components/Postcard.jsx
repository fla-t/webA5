import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, datetime, text }) => {
    return (
        <Link to={"/post"}>
            <Card className="m-2">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-5 text-muted">
                        {datetime}
                    </Card.Subtitle>
                    <Card.Text
                        style={{ maxHeight: "5rem", overflow: "hidden" }}
                    >
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default PostCard;
