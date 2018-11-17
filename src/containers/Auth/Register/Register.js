import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, RadioButton, RadioButtonGroup} from 'material-ui';
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';
import PatientContent from '../../../components/Register/Patient/Patient';
import HospitalContent from '../../../components/Register/Hospital/Hospital';
import {Link} from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dynamicFields: (<PatientContent handleInputChange={this.handleInputChange}/>),
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
                main_doctor: '',
                email: '',
                address: '',
                phone: '',
            }

        };
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleSetHospital = this.handleSetHospital.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        document.title = "Регистрация";
    }

    handleInputChange = (value, model, field) => {
        console.info(value, model, field)
    };

    handleSetHospital = (newValue) => {
        this.setState({isHospital: +newValue});
        if (+newValue === 1) {
            return this.setState({dynamicFields: (<HospitalContent handleInputChange={this.handleInputChange}/>)});
        }
        return this.setState({dynamicFields: (<PatientContent handleInputChange={this.handleInputChange}/>)});
    };

    handleRegisterClick = () => {
        // call API here
    };

    render() {
        return (
            <AuthCard title='Регистрация'>
                <Grid item xs={12} className={classes.centerFields}>
                    <p className={classes.authDesc}>(заполните свои данные)</p>
                </Grid>
                <Grid item xs={12}>
                    <RadioButtonGroup name="isHospital" defaultSelected="0"
                                      className={classes.radioGroup}
                                      onChange={(event, newValue) => this.handleSetHospital(newValue)}>
                        <RadioButton
                            value="0"
                            label="Пациент"
                            className={classes.centerRadioButtons}
                        />
                        <RadioButton
                            value="1"
                            label="Больница"
                            className={classes.centerRadioButtons}
                        />
                    </RadioButtonGroup>
                </Grid>
                {this.state.dynamicFields}
                <Grid item xs={12} className={classes.centerFields}>
                    <RaisedButton label="Зарегестрироваться" fullWidth primary className={classes.bottomButtons}
                                  onClick={(event) => this.handleRegisterClick(event)}/>
                    <Link to='/login'>
                        <RaisedButton label="Вернуться к входу" fullWidth secondary className={classes.bottomButtons}/>
                    </Link>
                </Grid>
            </AuthCard>
        );
    }
}

export default Register;
