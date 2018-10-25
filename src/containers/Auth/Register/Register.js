import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, RadioButton, RadioButtonGroup} from 'material-ui';
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

        };
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleSetHospital = this.handleSetHospital.bind(this);
    }

    componentDidMount() {
        document.title = "Registration";
    }

    handleSetHospital = (newValue) => {
        this.setState({isHospital: +newValue});
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
                {this.state.dynamicFields}
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
