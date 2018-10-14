import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './containers/Layout/Layout';
import Login from './containers/Auth/Login/Login';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserCircle, faSlidersH, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import './App.css';


library.add(faUserCircle, faSlidersH, faSignOutAlt);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: document.title,
        };
    }

    componentDidMount() {
        return this.setState({title: document.title});
    }

    render() {
        return (
            <MuiThemeProvider>
                <Layout title={this.state.title}>
                    <Login/>
                </Layout>
            </MuiThemeProvider>
        );
    }
}

export default App;
