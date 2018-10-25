import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {TextField} from 'material-ui';
import classes from './Hospital.module.css';

class HospitalContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    }

    handleUsername = (newValue) => {
        let hospital = this.state.hospital;
        hospital.login = newValue;
        this.setState(hospital);
    };

    handlePassword = (newValue) => {
        let hospital = this.state.hospital;
        hospital.password = newValue;
        this.setState(hospital);
    };

    handlePasswordConfirm = (newValue) => {
        let hospital = this.state.hospital;
        hospital.passwordConfirm = newValue;
        this.setState(hospital);
    };

    render() {
        return (
            <div>
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
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Enter Hospital Name"
                        floatingLabelText="Hospital Name"
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Enter Main Doctor Name"
                        floatingLabelText="Main Doctor Name"
                    />
                </Grid>
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
            </div>
        )
    }
}

export default HospitalContent;