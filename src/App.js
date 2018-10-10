import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout/Layout';
import Login from './Auth/Login/Login';
import './App.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Layout title="Title">
                    <Login/>
                </Layout>
            </MuiThemeProvider>
        );
    }
}

export default App;
