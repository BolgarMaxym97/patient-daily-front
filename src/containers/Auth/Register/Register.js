import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';
import PatientContent from '../../../components/Register/Patient/Patient';
import HospitalContent from '../../../components/Register/Hospital/Hospital';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dynamicFields: (<PatientContent/>),
            isHospital: 0,
            patient: {
                login: '',
                password: '',
                passwordConfirm: '',
                full_name: '',
                hospital_id: '',
                email: '',
                address: '',
                phone: '',
            },
            hospital: {
                login: '',
                password: '',
                passwordConfirm: '',
                hospital_name: '',
                main_doctor : '',
                email: '',
                address: '',
                phone: '',
            }
        };
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleSetHospital = this.handleSetHospital.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    }

    componentDidMount() {
        document.title = "Registration";
    }

    findModel = () => {
      return !!this.state.isHospital ? 'hospital' : 'patient';
    };

    handleSetHospital = (newValue) => {
        this.setState({isHospital: +newValue});
        if (+newValue === 1) {
            return this.setState({dynamicFields: (<HospitalContent/>)});
        }
        return this.setState({dynamicFields: (<PatientContent/>)});
    };

    handleUsername = (newValue) => {
        let patient = this.state[this.findModel()];
        patient.login = newValue;
        this.setState(patient);
    };

    handlePassword = (newValue) => {
        let patient = this.state[this.findModel()];
        patient.password = newValue;
        this.setState(patient);
    };

    handlePasswordConfirm = (newValue) => {
        let patient = this.state[this.findModel()];
        patient.passwordConfirm = newValue;
        this.setState(patient);
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
                                      onChange={(event, newValue) => this.handleSetHospital(newValue)}>
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
                        onChange={(event, newValue) => this.handleUsername(newValue)}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) => this.handlePassword(newValue)}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Confirm your Password"
                        floatingLabelText="Password Confirm"
                        onChange={(event, newValue) => this.handlePasswordConfirm(newValue)}
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

export default Register;
