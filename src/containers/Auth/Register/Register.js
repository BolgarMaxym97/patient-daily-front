import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';
import PatientContent from '../../../components/Register/Patient/Patient';
import HospitalContent from '../../../components/Register/Hospital/Hospital';
import api from '../../../api';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dynamicFields: (<PatientContent/>),
            hospitals: [],
            patient: {
                login: '',
                password: '',
                full_name: '',
                passwordConfirm: '',
                isHospital: 0,
            }
        };
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.setHospital = this.setHospital.bind(this);
    }

    componentDidMount() {
        document.title = "Registration";
    }

    setHospital = (newValue) => {
        if (+newValue === 1) {
            return this.setState({dynamicFields: (<HospitalContent/>)});
        }
        return this.setState({dynamicFields: (<PatientContent/>)});
    };

    handleRegisterClick = () => {
        // call API here
    };

    render() {
        return (
            <AuthCard>
                <Grid item xs={12} className={classes.centerFields}>
                    <p className={classes.authDesc}>(enter your data)</p>
                </Grid>
                <Grid item xs={12}>
                    <RadioButtonGroup name="isHospital" defaultSelected="0"
                                      className={classes.radioGroup}
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
                {this.state.dynamicFields}
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Enter email"
                        floatingLabelText="Email"
                        onChange={(event, newValue) => this.setState({login: newValue})}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Enter address"
                        floatingLabelText="Address"
                        onChange={(event, newValue) => this.setState({login: newValue})}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Enter phone"
                        floatingLabelText="Phone"
                        onChange={(event, newValue) => this.setState({login: newValue})}
                    />
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
