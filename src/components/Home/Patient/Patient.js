import React, {Component} from 'react';
import api from '../../../api';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'react-moment';
import {RaisedButton} from "material-ui";
import {Link} from 'react-router-dom';
import _ from 'lodash';
import Storage from '../../../app-storage';

class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patient: {},
            patientInfo: [],
            id: '',
        }
    };

    componentDidMount() {
        let id = _.get(this.props, 'match.params.id', _.get(Storage.user(), 'id'));
        api.get('/patients/' + id).then(res => {
            this.setState({patientInfo: res.data.PatientInfo});
            this.setState({patient: res.data});
            this.setState({id: id});
        })

    };

    render() {
        return (
            <div>
                <h1>&nbsp;Информация по пациенту {this.state.patient.full_name}: </h1>
                {Storage.isHospital() && (
                    <Link to={'/hospital/patient/create-info/' + this.state.id}>
                        <RaisedButton label="Внести запись" primary style={{margin: '10px'}}/>
                    </Link>
                )}
                {this.state.patientInfo.map(function (infoItem, index) {
                    return (
                        <Card style={{margin: '10px 10px'}} key={index}>
                            <CardContent>
                                <p color="textSecondary" style={{color: 'grey', fontSize: '12px'}}>
                                    <Moment locale="ru" fromNow>{infoItem.date}</Moment>
                                </p>
                                <h2>
                                    {infoItem.name}
                                </h2>
                                <hr/>
                                <p>
                                    {infoItem.text}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        );
    }
}

export default Patient;
