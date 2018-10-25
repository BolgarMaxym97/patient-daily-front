import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {TextField, SelectField, MenuItem} from 'material-ui';
import classes from './Patient.module.css';
import api from "../../../api";

class PatientContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hospitals: [],
            patient: {
                login: '',
                password: '',
                passwordConfirm: '',
                full_name: '',
                hospital_id: '',
                email: '',
                address: '',
                phone: '',
            }
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    }

    componentDidMount() {
        return api.get('hospitals-info')
            .then(res => {
                let hospitals = [];
                res.data.map(function (hospital) {
                    return hospitals.push({
                        id: hospital.id,
                        hospital_name: hospital.hospital_name,
                    })
                });
                return this.setState({hospitals})
            });
    }

    handleUsername = (newValue) => {
        let patient = this.state.patient;
        patient.login = newValue;
        this.setState(patient);
    };

    handlePassword = (newValue) => {
        let patient = this.state.patient;
        patient.password = newValue;
        this.setState(patient);
    };

    handlePasswordConfirm = (newValue) => {
        let patient = this.state.patient;
        patient.passwordConfirm = newValue;
        this.setState(patient);
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
                        hintText="Enter your Full Name"
                        floatingLabelText="Full Name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <SelectField floatingLabelText="Your hospital" className={classes.centerFieldsSelect}>
                        {this.state.hospitals.map(function (hospital) {
                            return (
                                <MenuItem value={hospital.id} primaryText={hospital.hospital_name} key={hospital.id}/>
                            )
                        })}
                    </SelectField>
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

export default PatientContent;