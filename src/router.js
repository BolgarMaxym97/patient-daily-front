import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import NotFoundPage from "./components/not-found/index";

class RouterWrapper extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        );
    }
}

export default RouterWrapper;