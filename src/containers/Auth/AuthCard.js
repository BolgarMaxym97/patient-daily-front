import React, {Component} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import classes from './AuthCard.module.css';
class Login extends Component {

    render() {
        return (
            <Grid container>
                <Paper elevation={20} className={classes.paper}>
                    <Grid item xs={12} className={classes.centerFields}>
                        <Typography component="h2" variant="h5" gutterBottom>
                            <b>Дневник пациента</b>
                        </Typography>
                    </Grid>
                    {this.props.children}
                </Paper>
            </Grid>
        );
    }
}

export default Login;
