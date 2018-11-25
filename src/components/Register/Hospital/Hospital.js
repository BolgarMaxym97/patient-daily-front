import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {TextField} from 'material-ui';
import classes from './Hospital.module.css';

class HospitalContent extends Component {

    render() {
        return (
            <div>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Введите Ваш логин"
                        floatingLabelText="Логин"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'login')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Введите Ваш пароль"
                        floatingLabelText="Пароль"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'password')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Подтвердите Ваш пароль"
                        floatingLabelText="Подтвердите пароль"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'passwordConfirm')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Название больницы"
                        floatingLabelText="Название больницы"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'hospital_name')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Имя глав-врача"
                        floatingLabelText="Глав-врач"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'main_doctor')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Заполните email"
                        floatingLabelText="Email"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'email')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Заполните адрес больницы"
                        floatingLabelText="Адрес"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'address')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Заполните телефон больницы"
                        floatingLabelText="Телефон"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'hospital', 'phone')}
                    />
                </Grid>
            </div>
        )
    }
}

export default HospitalContent;