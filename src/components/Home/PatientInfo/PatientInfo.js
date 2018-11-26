import React, {Component} from 'react';
import api from '../../../api';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {RaisedButton} from "material-ui";
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {TextField} from 'material-ui';
import noty from '../../../helpers/notifications';
import qs from 'qs';
import moment from 'moment';

class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patient_id: props.match.params.id,
            name: '',
            text: '',
            date: moment(),
        };
        this.handleNameChange = this.handleNameChange.bind(this);
    };

    handleNameChange = (value) => {
        return this.setState({name: value});
    };

    handleTextChange = (value) => {
        return this.setState({text: value});
    };

    handleDateChange = (value) => {
        return this.setState({date: value});
    };

    handleCreateClick = () => {
        return api.post('patient-info-model/create', qs.stringify(this.state))
            .then(res => {
                if (res.status === 200 && res.statusText === 'OK') {
                    noty.show('success', 'Данные созданы успешно');
                    return this.props.history.push('/hospital/patient/' + this.state.patient_id);
                } else {
                    noty.show('error', 'Неправильно заполнены данные')
                }
            }).catch(res => {
                noty.show('error', 'Неправильно заполнены данные')
            });
    };

    render() {
        return (
            <div>
                <h1>&nbsp;Создание записи: </h1>
                <Link to={'/hospital/patient/' + this.props.match.params.id}>
                    <RaisedButton label="Назад" secondary style={{margin: '10px'}}/>
                </Link>
                <Card style={{margin: '10px 10px'}}>
                    <CardContent>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                hintText="Зголовок"
                                floatingLabelText="Зголовок"
                                onChange={(event, newValue) => this.handleNameChange(newValue)}
                            />
                            <TextField
                                fullWidth
                                hintText="Текст"
                                floatingLabelText="Текст"
                                onChange={(event, newValue) => this.handleTextChange(newValue)}
                            />
                            <RaisedButton label="Создать" primary style={{margin: '10px'}}
                                          onClick={this.handleCreateClick}/>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Patient;
