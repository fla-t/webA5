import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Post from "./components/Post";
import Postcard from "./components/Postcard";
import Signup from "./components/Signup";
import Home from "./components/Home";

class App extends Component {
    state = {
        jwt: "",
    };

    render() {
        return (
            <React.Fragment>
                <Navbar isSignedIn={this.state.jwt === "" ? false : true} />
                <Container>
                    <Router>
                        <Switch>
                            <Route path="/signup" component={Signup} />
                            <Route path="/post" component={Post} />
                            <Route path="/post/:id" component={Postcard} />
                            <Route path="/signin" component={Signin} />
                            <Route path="/" component={Home} exact />
                        </Switch>
                    </Router>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
