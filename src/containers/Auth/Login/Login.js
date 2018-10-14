import React, {Component} from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';

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
        const style = {
            centerFields: {
                margin: '10px auto 0 auto',
                textAlign: 'center'
            },
            centerRadioButtons: {
                margin: '0 auto 10px auto',
                width: '8%'
            },
            bottomButtons: {
                margin: '10px'
            },
            paper: {
                margin: '5% auto'
            }
        };
        return (
            <Grid container>
                <Paper elevation={1} style={style.paper}>
                    <Grid item xs={12} style={style.centerFields}>
                        <Typography component="h2" variant="h5" gutterBottom>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={style.centerFields}>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                    </Grid>
                    <Grid item xs={12} style={style.centerFields}>
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
                                className="radioGroup-item"
                                style={style.centerRadioButtons}
                            />
                            <RadioButton
                                value="1"
                                label="Hospital"
                                className="radioGroup-item"
                                style={style.centerRadioButtons}
                            />
                        </RadioButtonGroup>
                    </Grid>
                    <Grid item xs={12} style={style.centerFields}>
                        <RaisedButton label="Login" primary style={style.bottomButtons}
                                      onClick={(event) => this.handleLoginClick(event)}/>
                        <RaisedButton label="Register" primary style={style}
                                      onClick={(event) => this.handleLoginClick(event)}/>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default Login;
