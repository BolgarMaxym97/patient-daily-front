import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid} from '@material-ui/core';
import {RaisedButton} from 'material-ui';

import './App.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Grid container>
                    <Grid item xs={3}>
                        <RaisedButton label="Default" primary={true}/>
                    </Grid>
                    <Grid item xs={3}>
                        <RaisedButton label="Default" primary={true}/>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
