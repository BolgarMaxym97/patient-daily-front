import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import routes from './routes';
import RequireAuth from '../middlewares/RequireAuth';

class RouterWrapper extends React.Component {
    render() {
        const routeComponents = routes.map(
            ({path, component, title, exact, authed}, key) => {
                return (
                    <Route exact={exact} path={path} component={authed ? RequireAuth(component) : component} key={key}/>
                )
            }
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