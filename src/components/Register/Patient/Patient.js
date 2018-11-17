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
            hospital_id: 1
        };
        this.handleSetHospitalID = this.handleSetHospitalID.bind(this);
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

    handleSetHospitalID = (event, index, newValue) => {
        this.setState({hospital_id : newValue});
        return this.props.handleInputChange(newValue, 'patient', 'hospital_id');
    };

    render() {
        return (
            <div>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Введите Ваш логин"
                        floatingLabelText="Логин"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'patient', 'login')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Введите Ваш пароль"
                        floatingLabelText="Пароль"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'patient', 'password')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        type="password"
                        hintText="Подтвердите Ваш пароль"
                        floatingLabelText="Подтвердите пароль"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'patient', 'passwordConfirm')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Введите Ваше полное имя"
                        floatingLabelText="Полное имя"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'patient', 'full_name')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <SelectField floatingLabelText="Ваша больница" className={classes.centerFieldsSelect}
                                 value={this.state.hospital_id}
                                 onChange={this.handleSetHospitalID}
                    >
                        {this.state.hospitals.map(function (hospital) {
                            return (
                                <MenuItem value={hospital.id} primaryText={hospital.hospital_name} key={hospital.id}/>
                            )
                        })}
                    </SelectField>
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Ваш email"
                        floatingLabelText="Email"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'patient', 'email')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Ваш адрес"
                        floatingLabelText="Адрес"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'patient', 'address')}
                    />
                </Grid>
                <Grid item xs={12} className={classes.centerFields}>
                    <TextField
                        hintText="Ваш телефон"
                        floatingLabelText="Телефон"
                        onChange={(event, newValue) => this.props.handleInputChange(newValue, 'patient', 'phone')}
                    />
                </Grid>
            </div>
        )
    }
}

export default PatientContent;