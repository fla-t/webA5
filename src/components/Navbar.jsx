import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar as BootstrapNav,
    Container,
    Nav,
    Button,
} from "react-bootstrap";

const Navbar = (props) => {
    return (
        <BootstrapNav bg="light" variant="light">
            <Container>
                <BootstrapNav.Brand href="#home">Blogger</BootstrapNav.Brand>
                <Nav className="me-auto">
                    <Link to="/">
                        <Button variant="secondary" size="sm" className="m-1">
                            Home
                        </Button>
                    </Link>
                    <Link to="/post">
                        <Button variant="secondary" size="sm" className="m-1">
                            Post
                        </Button>
                    </Link>
                </Nav>
                <Nav className="ms-auto">
                    {props.isSignedIn ? (
                        <button onClick={() => alert("hello")}>logout</button>
                    ) : (
                        <React.Fragment>
                            <Link to="/signup">
                                <Button size="sm" className="m-1">
                                    Sign Up
                                </Button>
                            </Link>

                            <Link to="/signin">
                                <Button size="sm" className="m-1">
                                    Sign In
                                </Button>
                            </Link>
                        </React.Fragment>
                    )}
                </Nav>
            </Container>
        </BootstrapNav>
    );
};

export default Navbar;
