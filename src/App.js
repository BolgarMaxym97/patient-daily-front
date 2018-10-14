import React, {Component} from 'react';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import Layout from './containers/Layout/Layout';
import Register from './containers/Auth/Register/Register';
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
        const theme = getMuiTheme({
            palette: {
                primary1Color: '#673ab7',
                primary2Color: '#482880',
                primary3Color: '#8561c5',
                accent1Color: '#00e676',
                accent2Color: '#00a152',
                accent3Color: '#33eb91',
            },
        });

        return (
            <MuiThemeProvider muiTheme={theme}>
                <Layout title={this.state.title}>
                    <Register/>
                </Layout>
            </MuiThemeProvider>
        );
    }
}

export default App;
