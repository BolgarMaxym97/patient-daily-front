import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './containers/Layout/Layout';
import Login from './containers/Auth/Login/Login';
import './App.css';

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
