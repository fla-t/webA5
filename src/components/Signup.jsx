import { React, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="text-center mt-5">
            <Form>
                <Row>
                    <Col xs={4} className="mx-auto">
                        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
                        <Form.Control
                            type="email"
                            id="inputEmail"
                            placeholder="Email address"
                            required=""
                            autoFocus=""
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <br></br>
                        <Form.Control
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required=""
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <br></br>
                        <Button
                            size="lg"
                            variant="success"
                            // onClick={() => handleSignUp()}
                        >
                            Sign up
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Signup;
