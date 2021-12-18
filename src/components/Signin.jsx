import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Signin = () => {
    return (
        <div className="text-center mt-5">
            <Form>
                <Row>
                    <Col xs={4} className="mx-auto">
                        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
                        <Form.Control
                            type="email"
                            id="inputEmail"
                            placeholder="Email address"
                            required=""
                            autofocus=""
                        />
                        <br></br>
                        <Form.Control
                            type="password"
                            id="inputPassword"
                            class="form-control"
                            placeholder="Password"
                            required=""
                        />
                        <br></br>
                        <Button size="lg" type="submit" variant="success">
                            Sign in
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Signin;
