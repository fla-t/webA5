import React from "react";
import { Row, Col } from "react-bootstrap";

const Post = ({}) => {
    return (
        <Row>
            <Col xs={8} className="my-5">
                <h2 class="blog-post-title">Sample blog post</h2>
                <p class="blog-post-meta">
                    January 1, 2014 by <a>Mark</a>
                </p>
                <p>
                    Cum sociis natoque penatibus et magnis nascetur ridiculus
                    mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum. Sed posuere consectetur est at
                    lobortis. Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Col>
        </Row>
    );
};

export default Post;
