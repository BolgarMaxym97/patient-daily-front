import React, {Component} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isHospital: 0,
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    componentDidMount() {
        document.title = "Login"
    }

    handleLoginClick() {
        // call API here
    }

    render() {
        return (
            <AuthCard>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange={(event, newValue) => this.setState({username: newValue})}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) => this.setState({password: newValue})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <RadioButtonGroup name="isHospital" defaultSelected="0"
                                      onChange={(event, newValue) => this.setState({isHospital: newValue})}>
                        <RadioButton
                            value="0"
                            label="Patient"
                            className={classes.centerRadioButtons}
                        />
                        <RadioButton
                            value="1"
                            label="Hospital"
                            className={classes.centerRadioButtons}
                        />
                    </RadioButtonGroup>
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <RaisedButton label="Login" fullWidth primary className={classes.bottomButtons}
                                  onClick={(event) => this.handleLoginClick(event)}/>
                    <RaisedButton label="Register" fullWidth secondary className={classes.bottomButtons}
                                  onClick={(event) => this.handleLoginClick(event)}/>
                </Grid>
            </AuthCard>
        );
    }
}

export default Login;
