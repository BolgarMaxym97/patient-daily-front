import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {RaisedButton, TextField, RadioButton, RadioButtonGroup} from 'material-ui';
import {Link} from "react-router-dom";
import AuthCard from '../AuthCard';
import classes from '../AuthCard.module.css';
import api from '../../../api';
import qs from 'qs';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isHospital: 0,
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    componentDidMount() {
        document.title = "Вход";
    }

    handleLoginClick = () => {
        api.post('auth', qs.stringify(this.state))
            .then(res => {
                console.log(res);
            });
    };

    render() {
        return (
            <AuthCard title='Авторизация'>
                <Grid item xs={12} className={classes.centerFields}>
                    <p className={classes.authDesc}>(для входа в личный кабинет введите логин и пароль)</p>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Логин"
                        onChange={(event, newValue) => this.setState({login: newValue})}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
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
