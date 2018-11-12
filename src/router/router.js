import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Layout from "../containers/Layout/Layout";
import routes from './routes';

class RouterWrapper extends React.Component {
    render() {
        const routeComponents = routes.map(
            ({path, component, title}, key) => <Route exact path={path} component={component} key={key} />
        );
        return (
            <Router>
                <Switch>
                    <Layout>
                        {routeComponents}
                    </Layout>
                </Switch>
            </Router>
        );
    }
}

export default RouterWrapper;