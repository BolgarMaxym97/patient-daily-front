import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';
import {Link} from "react-router-dom";
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';
import api from '../../../api';
import Validator from '../../../helpers/validator';
import Storage from '../../../app-storage';
import qs from 'qs';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isHospital: 0,
            notValid: false,
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    componentDidMount() {
        if (Storage.auth()) {
            return this.props.history.push('/');
        }
        document.title = "Вход";
    }

    errorMessage = (field) => {
        if (field.length > 0 && !Validator.validate(Validator.TYPES.ALPHANUMERIC, field)) {
            return 'This field required and must be alphanumeric'
        }
        return '';
    };

    validateForm = () => {
        return (Validator.validate(Validator.TYPES.ALPHANUMERIC, this.state.login) && Validator.validate(Validator.TYPES.ALPHANUMERIC, this.state.password))
    };

    handleLoginClick = () => {
        if (this.validateForm()) {
            this.setState({notValid: false});
            return api.post('auth', qs.stringify({
                login: this.state.login,
                password: this.state.password,
                isHospital: this.state.isHospital,
            }))
                .then(res => {
                    Storage.user(res.data);
                    this.props.history.push('/');
                });
        }
        return this.setState({notValid: true});

    };

    render() {
        return (
            <AuthCard title='Авторизация'>
                <Grid item xs={12} className={classes.centerFields}>
                    <p className={classes.authDesc}>(для входа в личный кабинет введите логин и пароль)</p>
                    {this.state.notValid && (
                        <p className={classes.errorMessage}>All fields are required and must be alphanumeric</p>
                    )}
                    <TextField
                        errorText={this.errorMessage(this.state.login)}
                        hintText="Enter your Username"
                        floatingLabelText="Логин"
                        onChange={(event, newValue) => this.setState({login: newValue})}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        errorText={this.errorMessage(this.state.password)}
                        hintText="Enter your Password"
                        floatingLabelText="Пароль"
                        onChange={(event, newValue) => this.setState({password: newValue})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <RadioButtonGroup name="isHospital" defaultSelected="0"
                                      onChange={(event, newValue) => this.setState({isHospital: newValue})}>
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
                <Grid item xs={12} className={classes.centerFields}>
                    <RaisedButton label="Вход" fullWidth primary className={classes.bottomButtons}
                                  onClick={(event) => this.handleLoginClick(event)}/>
                    <Link to='/register'>
                        <RaisedButton label="Регистрация" fullWidth secondary className={classes.bottomButtons}/>
                    </Link>
                </Grid>
            </AuthCard>
        );
    }
}

export default Login;
