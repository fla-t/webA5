import React from "react";
import { NavLink } from "react-router-dom";
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
                {/* <NavLink>
                    <BootstrapNav.Brand to="/">Blogger</BootstrapNav.Brand>
                </NavLink> */}
                <Nav className="me-auto">
                    <NavLink to="/">
                        <Button variant="secondary" size="sm" className="m-1">
                            Home
                        </Button>
                    </NavLink>
                    <NavLink to="/post">
                        <Button variant="secondary" size="sm" className="m-1">
                            Post
                        </Button>
                    </NavLink>
                </Nav>
                <Nav className="ms-auto">
                    {props.isSignedIn ? (
                        <button onClick={() => alert("hello")}>logout</button>
                    ) : (
                        <React.Fragment>
                            <NavLink to="/signup">
                                <Button size="sm" className="m-1">
                                    Sign Up
                                </Button>
                            </NavLink>

                            <NavLink to="/signin">
                                <Button size="sm" className="m-1">
                                    Sign In
                                </Button>
                            </NavLink>
                        </React.Fragment>
                    )}
                </Nav>
            </Container>
        </BootstrapNav>
    );
};

export default Navbar;
