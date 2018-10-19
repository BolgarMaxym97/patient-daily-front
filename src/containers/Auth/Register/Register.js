import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHospitalContent: this.setPatientContent(),
            patient: {
                login: '',
                password: '',
                full_name: '',
                passwordConfirm: '',
                isHospital: 0,
            }
        };
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    componentDidMount() {
        document.title = "Registration"
    }

    setPatientContent = () => (
        <Grid item xs={12} className={classes.centerFields}>
            <TextField
                hintText="Enter your Full Name"
                floatingLabelText="Full Name"
                onChange={(event, newValue) => this.setState(prevState => ({
                    patient: {
                        ...prevState.patient,
                        full_name: newValue
                    }
                }))}
            />
        </Grid>
    );

    setHospitalContent = () => (
        <div>
            <Grid item xs={12} className={classes.centerFields}>
                <TextField
                    hintText="Enter Hospital Name"
                    floatingLabelText="Hospital Name"
                    onChange={(event, newValue) => this.setState({hospital_name: newValue})}
                />
            </Grid>
            <Grid item xs={12} className={classes.centerFields}>
                <TextField
                    hintText="Enter Main Doctor Name"
                    floatingLabelText="Main Doctor Name"
                    onChange={(event, newValue) => this.setState({main_doctor: newValue})}
                />
            </Grid>
        </div>
    );

    setHospital = (newValue) => {
        if (+newValue === 1) {
            return this.setState({isHospitalContent: this.setHospitalContent()});
        }
        return this.setState({isHospitalContent: this.setPatientContent()});
    };

    handleRegisterClick = () => {
        // call API here
    };

    render() {
        return (
            <AuthCard>
                <Grid item xs={12} className={classes.centerFields}>
                    <p className={classes.authDesc}>(enter your data)</p>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange={(event, newValue) => this.setState({login: newValue})}
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
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Confirm your Password"
                        floatingLabelText="Password Confirm"
                        onChange={(event, newValue) => this.setState({passwordConfirm: newValue})}
                    />
                </Grid>
                {this.state.isHospitalContent}
                <Grid item xs={12}>
                    <RadioButtonGroup name="isHospital" defaultSelected="0"
                                      onChange={(event, newValue) => this.setHospital(newValue)}>
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
                    <RaisedButton label="Create New Account" fullWidth primary className={classes.bottomButtons}
                                  onClick={(event) => this.handleRegisterClick(event)}/>
                    <RaisedButton label="Back To Login" fullWidth secondary className={classes.bottomButtons}
                                  href="/login"/>
                </Grid>
            </AuthCard>
        );
    }
}

export default Login;
