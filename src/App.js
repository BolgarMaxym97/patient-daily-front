import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Auth/Login/Login';
import {AppBar} from 'material-ui';
import './App.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Login"
                />
                <Login/>
            </MuiThemeProvider>
        );
    }
}

export default App;
