import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, RadioButton, RadioButtonGroup} from 'material-ui';
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';
import PatientContent from '../../../components/Register/Patient/Patient';
import HospitalContent from '../../../components/Register/Hospital/Hospital';
import {Link} from "react-router-dom";
import api from '../../../api';
import Validator from '../../../helpers/validator';
import noty from '../../../helpers/notifications';
import qs from 'qs';

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
                hospital_id: 1,
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
        this.setState(prevState => ({
            [model]: {
                ...prevState[model],
                [field]: value
            }
        }));
    };

    handleSetHospital = (newValue) => {
        this.setState({isHospital: +newValue});
        if (+newValue === 1) {
            return this.setState({dynamicFields: (<HospitalContent handleInputChange={this.handleInputChange}/>)});
        }
        return this.setState({dynamicFields: (<PatientContent handleInputChange={this.handleInputChange}/>)});
    };

    handleRegisterClick = () => {
        let model = this.state.isHospital ? 'hospital' : 'patient';
        return api.post('auth/register-' + model, qs.stringify(this.state[model]))
            .then(res => {
                if (res.status === 200 && res.statusText == 'OK') {
                    return this.props.history.push('/login');
                } else {
                    noty.show('error', 'Неправильно заполнены данные или такой пользователь уже создан')
                }
            }).catch(res => {
                noty.show('error', 'Неправильно заполнены данные или такой пользователь уже создан')
            });
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
